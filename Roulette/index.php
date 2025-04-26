 <?php
include_once($_SERVER['DOCUMENT_ROOT'] . "/config/db_manager_singleton.inc");

function loadItem() {
    $db = DBManagerSingleton::getInstanceDB($GLOBALS['DatabaseCurrentUsed']);
    $params = $db->params;

    $query = 'SELECT TOP 8 
        phe.[Name],
        phe.[Numero],
        phe.[TypeID],
        phe.[Quantidade],
        phe.[Probabilidade],
        phe.[Tipo],
        phe.[flag],
        it.icon AS [Icon]
    FROM 
        [pangya].[scratchy_item] phe
    JOIN 
        [pangya].[pangya_item_typelist] it
    ON 
        phe.TypeID = it.typeid 
    WHERE 
        active = 1 
    ORDER BY 
        Tipo;';
    
    $result = $db->db->execPreparedStmt($query, $params->get(), 1);

    $items = []; // Array para armazenar os itens
    while ($row = $result->fetch_assoc()) { // Itera pelas linhas de resultado
        if (isset($row['TypeID'])) {
            $items[] = $row;
        }
    }

    return $items; // Retorna os itens encontrados
}

$items = loadItem(); // Chama a função e armazena o resultado
?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <title>Pangya Roulette Event</title>
    <link rel="stylesheet" href="./css/game.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body >
    <main id="main-page"> 
             <bgsound id="bgm_teatime" controls muted src="./Sounds/teatime.mp3" style="display: none;" loop="1">
<div class="game-page">
            <div class="game-container">
                <img width="220" title="PangYa Premiun Jackpot" style="margin-top: 116px; margin-right: 242px;" alt="" src="./imgs/logo.png">
                <div class="out-circle">
                    <button id="mute_unmute" class="mute_unmute" ><i class="fa-solid fa-volume-high"></i></button>
                </div><!-- Sound Button -->

                <div class="qty-container">
                    <img src="./imgs/item1_48.png" alt="" width="55px">
                    <div class="numbers-container">
                        <span class="qty">0</span>
                    </div>
                </div><!-- Container showing how many game tickets the user have -->

                <div class="roulette-section">
                    <div class="title" style="margin-left: 8px;">
                        <span>Roleta</span>
                    </div>

                    <div class="r-container">
                      <div class="sub-container" style="margin-top: -14px;">
                            <div class="square">
<div id="itemBox" style="width: 65px; height: 65px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
    <img alt="" style="width: 100%; height: 100%; object-fit: contain;" src="../../img/items/<?php echo $items[0]['Icon']; ?>.png">
</div>

                            </div>
                        </div>
    
                   <button id="start" style="margin-top: 21px;" onclick="roulette();" type="button">Start Game</button>
				   </div>
                </div><!-- Roulette item section -->

                <div class="items-section">
                    <div class="title">
                        <span>Items</span>
                    </div>

                    <div class="items-container">
					 <?php foreach ($items as $item): ?>
    <div class="item-frame">
        <span><?php echo $item['Name']; ?></span>

        <div class="out-frame">
            <div class="in-frame">
                <img style="margin-top: <?php echo $item['Tipo'] == 0? '7px' : '0px'; ?>; "src="../../img/items/<?php echo $item['Icon']; ?>.png" alt="" width="45px">
            </div>
        </div><!-- Item frame -->

        <div class="prob-bar">
            <div class="prob" style="width: <?php echo $item['Probabilidade']; ?>%; background-color: blue; border-radius: 1rem;"></div>
        </div><!-- Probability bar -->

        <span class="bar-name">Qtde</span>
        <span class="qty">x<?php echo $item['Quantidade']; ?></span>
    </div><!-- item -->
<?php endforeach; ?>

                    </div><!-- Items container -->
                </div><!-- Item preview section -->
            </div>
        </div>

        <!-- Window Overlay -->
        <div class="window-overlay" id="window-background"></div>

        <!-- Window -->
        <div class="windows" id="windows">
        </div> 
    </main>

    <!-- Game handler --> 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <script>
  // Em vez de usar uma função de seta, usamos uma função tradicional
    $(document).ready(function() {
        windowHandler(1, null);
    });
    // Função principal: roleta
 function roulette() {
    document.getElementById('start').disabled = true; // Desativa o botão

    // Configura os sons
    var roulette = new BgSound('./Sounds/roulette.wav');
    var roulette_decided = new BgSound('./Sounds/roulette_decided.wav');
    var roulette_btn = new BgSound('./Sounds/roulette_btn_act.wav');
    roulette_btn.play();

    roulette.loop = true;
    roulette.play();

    // Itens a serem exibidos
    var item_map = <?php echo json_encode($items); ?>;
    var items = [];
    var probabilityTable = []; // Tabela de probabilidades ponderadas

    // Calcula o total de probabilidade por tipo
    var typeTotals = {};
    for (var i = 0; i < item_map.length; i++) {
        var item = item_map[i];
        items.push('<img style="max-width: 100%; max-height: 100%; object-fit: contain;" src="../../img/items/' + item.Icon + '.png" alt="' + item.Name + '">');

        if (!typeTotals[item.Tipo]) {
            typeTotals[item.Tipo] = 0;
        }
        typeTotals[item.Tipo] += item.Probabilidade; // Soma as probabilidades por tipo
    }

    // Cria a tabela de probabilidades ajustadas
    for (var i = 0; i < item_map.length; i++) {
        var item = item_map[i];

        // Aplica um fator de dificuldade para Tipo 1 (Raro) e Tipo 0 (Comum)
        var dificuldadeFactor = item.Tipo === 1 ? 0.3 : 1.5; // Raros: 0.3, Comuns: 1.5

        // Ajusta a probabilidade com o fator de dificuldade
        var adjustedProbability = (item.Probabilidade * dificuldadeFactor) / typeTotals[item.Tipo]; // Ajusta pela soma do tipo

        // Preenche a tabela com base na probabilidade ajustada
        var occurrences = Math.round(adjustedProbability * 100); // Escala para evitar decimais
        for (var j = 0; j < occurrences; j++) {
            probabilityTable.push(i); // Adiciona o índice do item
        }
    }

    var itemIndex = 0;

    // Animação dos itens
    function animateItemBox() {
        document.getElementById('itemBox').innerHTML = items[itemIndex];
        itemIndex = (itemIndex + 1) % item_map.length;
    }
    var intervalId = setInterval(animateItemBox, 50);

    // Simulação do sorteio
    setTimeout(function() {
        clearInterval(intervalId);

        // Escolhe um índice aleatório baseado na tabela de probabilidades
        var randomIndex = Math.floor(Math.random() * probabilityTable.length);
        var randomItemIndex = probabilityTable[randomIndex];
        document.getElementById('itemBox').innerHTML = items[randomItemIndex];

        roulette.pause();
        roulette_decided.play();

        // Efeito de piscar
        var blinkTimes = 5;
        function blinkFunction() {
            if (blinkTimes > 0) {
                blinkTimes--;
                $('#itemBox').fadeOut(150).fadeIn(150, blinkFunction);
            } else {
                setTimeout(function() {
                    document.getElementById('start').disabled = false;
                    var win_item = item_map[randomItemIndex];
                    windowHandler(0, win_item);
                }, 120);
            }
        }
        blinkFunction();
    }, 5000);
}

</script>
 <script src="./js/game.js"></script>
 <script src="./js/windows.js"></script> 
</body>
</html> 