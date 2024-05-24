<?php
// Define as variáveis iniciais
$my_holes = 0;
$end_event = '16/05/2024 10:20:20';
$itens = [
    ["image" => "item_1.png", "name" => "Item 0"],
    ["image" => "item_2.png", "name" => "Item 1"],
    ["image" => "item_3.png", "name" => "Item 2"],
    ["image" => "item_4.png", "name" => "Item 3"],
    ["image" => "item_5.png", "name" => "Item 4"]
];
// Inclui os arquivos necessários
include_once($_SERVER['DOCUMENT_ROOT'] . "/HoleEvent/source/config.inc");
include_once($_SERVER['DOCUMENT_ROOT'] . "/HoleEvent/source/design.inc");
include_once($_SERVER['DOCUMENT_ROOT'] . "/config/db_manager_singleton.inc");

// Obtém uma instância do gerenciador de banco de dados
$db = DBManagerSingleton::getInstanceDB($GLOBALS['DatabaseCurrentUsed']);
$params = $db->params;

// Verifica se o ID foi passado via GET
$id = isset($_GET["ID"]) ? $_GET["ID"] : null;

// Verifica se o ID é válido
if ($id !== null && strlen($id) <= 25) {
    // Inicia a sessão e limpa-a
    if (!isset($_SESSION)) {
        session_start();
    }
    if (isset($_SESSION['player'])) {
        unset($_SESSION['player']);
    }
    $_SESSION['player'] = ['logged' => false];

    // Verifica o ID no banco de dados
    $params->clear();
    $params->add('s', $id);
    $query = '';

    // Constrói a consulta de acordo com o banco de dados utilizado
    if (DatabaseConfig::_MSSQL_ === $GLOBALS['DatabaseCurrentUsed']) {
        $query = 'SELECT UID FROM pangya.account WHERE ID = ? AND LOGON = 1';
    }

    // Executa a consulta e verifica o resultado
    if ($result = $db->db->execPreparedStmt($query, $params->get())) {
        $row = $result->fetch_assoc();
        if (!empty($row['UID'])) {
            // Verifica as informações do usuário
            $params->clear();
            $params->add('s', $row['UID']);
            if (DatabaseConfig::_MSSQL_ === $GLOBALS['DatabaseCurrentUsed']) {
                $query = 'exec '.$db->con_dados['DB_NAME'].'.GetInfo_user ?';
            }
            if ($result = $db->db->execPreparedStmt($query, $params->get())) {
                $row = $result->fetch_assoc();
                if (!empty($row['Holes'])) {
                    $my_holes = $row['Holes'] + 1000;
                } else {
                    redirectToErrorPage();
                }
            } else {
                redirectToErrorPage();
            }
        } else {
            redirectToErrorPage();
        }
    } else {
        redirectToErrorPage();
    }
}

// Função para redirecionar para a página de erro
function redirectToErrorPage() {
    $redirectURL = "unknown_error.html";
    header("Location: $redirectURL");
    exit; // Encerra o script após o redirecionamento
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>PangYa Hole Event</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Vendor CSS -->
  	    <script src="./include/pangya.js"></script>
      <link href="./include/style.css" rel="stylesheet">
       <style>
             
        .img {
            text-align: center;
            height: 100vh; /* Altura da tela */
            display: flex;
            justify-content: center;
            align-items: center;
			max-width: 100%;
            height: auto;
        }
		

.button:not(.active) {
    pointer-events: none; /* Desativa os eventos de clique nos botões sem a classe .active */
}

        </style>

</head>
 
<body class="sky"> 
 <table width="800" height="553" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td  class="background-container">
      <img src="./include/bg_new.png"  width="650" height="553" border="0" > 
  <img class="image_progress" src="./include/gauge.png" >
   <span class="textposition line-1" style="font-size: 10px;" id="typedtext">Event End: <?php echo $end_event;?>_</span>
  <span class="textposition2 line-1" id="holes"><?php echo $my_holes;?></span>
  <span style="display: block;  top: 482px;left: 136px; position: absolute; color: black;font-size: 10px; white-space: nowrap;">Text do item 0</span>
  <button class="item_0 button" id="button0" style="top: 422px; left: 143px; background-image: url('./include/items/item_1.png'); background-size: cover; width: 50px; height: 60px;">
</button>
  <span style="display: block;  top: 482px;left: 230px; position: absolute; color: black;font-size: 10px; white-space: nowrap;">Text do item 1</span>
<button class="item_1 button" id="button1" style="top: 422px; left: 232px; background-image: url('./include/items/item_2.png'); background-size: cover; width: 50px; height: 60px;">
</button>
  <span style="display: block;  top: 482px;left: 330px; position: absolute; color: black;font-size: 10px; white-space: nowrap;">Text do item 2</span>
<button class="item_2 button" id="button2" style="top: 422px; left: 329px; background-image: url('./include/items/item_3.png'); background-size: cover; width: 50px; height: 60px;">
</button>
  <span style="display: block;  top: 482px;left: 420px; position: absolute; color: black;font-size: 10px; white-space: nowrap;">Text do item 3</span>
<button class="item_3 button" id="button3" style="top: 422px; left: 425px; background-image: url('./include/items/item_4.png'); background-size: cover; width: 50px; height: 60px;">
</button>
  <span style="display: block;  top: 482px;left: 518px; position: absolute; color: black;font-size: 10px; white-space: nowrap;">Text do item 4</span>
<button class="item_4 button" id="button4" style="top: 422px; left: 523px; background-image: url('./include/items/item_5.png'); background-size: cover; width: 50px; height: 60px;">
</button>
</div> 
</td>
</tr>
</table>

<script> 
    function updateProgressBar(totalHoles) {
         var progressImage = document.querySelector('.image_progress');
        var maxWidth = 339; // Largura máxima da barra de progresso em pixels
        var width = (totalHoles / 1000) * maxWidth; // Calcular a largura proporcional

        progressImage.style.width = width + 'px';

        var holes = document.getElementById('holes');
        holes.innerText = totalHoles; 
        // Ativar botões com base nos "holes"
        if (totalHoles == 100) {
		holes.style.left = '574px';
            document.getElementById('button0').classList.add('active');
			document.getElementById('button0').classList.add('brilho');
        }
        if (totalHoles >= 300) {
		holes.style.left = '574px';
            document.getElementById('button1').classList.add('active');
			document.getElementById('button1').classList.add('brilho');
        }
        if (totalHoles >= 500) {
		holes.style.left = '574px';
            document.getElementById('button2').classList.add('active');
						document.getElementById('button2').classList.add('brilho');

        }
        if (totalHoles >= 700) {
		holes.style.left = '574px';
            document.getElementById('button3').classList.add('active');
     			document.getElementById('button3').classList.add('brilho');
   }
        if (totalHoles >= 1000) {
		holes.style.left = '574px';
            document.getElementById('button4').classList.add('active');
    			document.getElementById('button4').classList.add('brilho');
    }
    }

    updateProgressBar(100); // Exemplo: atualizando barra com 200 "holes"
</script>
<script>

function updateWteMarkPosition(item) {  
    // Extrai as propriedades de posição e converte para número
     const top = parseInt(item.style.top, 10);
    const left = parseInt(item.style.left, 10);

    // Cria a imagem wteMark
    const wteMark = document.createElement('img');
    wteMark.id = item.id + '_wte-mark'; // Define o ID da imagem wte-mark
    wteMark.src = './include/get_item.png';
    wteMark.alt = 'WTE Mark';
    wteMark.style.position = 'absolute'; // Define a posição como absoluta
    wteMark.classList.add('wte-mark'); // Adiciona a classe wte-mark para estilização
    wteMark.classList.add('brilho'); // Adiciona a classe wte-mark para estilização

    // Ajusta a posição do wteMark com os valores adicionais
    wteMark.style.top = (top +16) + 'px';
    wteMark.style.left = (left) + 'px';

    // Adiciona o wteMark à classe "background-container"
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.appendChild(wteMark);
}

 
document.getElementById('button0').addEventListener('click', function() {
const item = document.querySelector('.item_0:not(#wteMark)');
    item.style.filter = 'grayscale(100%)'; // 100% de escala de cinza
    item. style.pointerEvents = "none"; // deixa inacessavel o botao
     			document.getElementById('button0').classList.remove('brilho');
updateWteMarkPosition(item);

});

document.getElementById('button1').addEventListener('click', function() {

const item = document.querySelector('.item_1:not(#wteMark)');
    item.style.filter = 'grayscale(100%)'; // 100% de escala de cinza
    item. style.pointerEvents = "none"; // deixa inacessavel o botao
	document.getElementById('button1').classList.remove('brilho');
updateWteMarkPosition(item);
});

document.getElementById('button2').addEventListener('click', function() {
   const item = document.querySelector('.item_2:not(#wteMark)');
    item.style.filter = 'grayscale(100%)'; // 100% de escala de cinza
    item. style.pointerEvents = "none"; // deixa inacessavel o botao
    			document.getElementById('button2').classList.remove('brilho');
updateWteMarkPosition(item);
});

document.getElementById('button3').addEventListener('click', function() {
   const item = document.querySelector('.item_3:not(#wteMark)');
    item.style.filter = 'grayscale(100%)'; // 100% de escala de cinza
    item. style.pointerEvents = "none"; // deixa inacessavel o botao
    			document.getElementById('button3').classList.remove('brilho'); 
updateWteMarkPosition(item);
});

document.getElementById('button4').addEventListener('click', function() {
   const item = document.querySelector('.item_4:not(#wteMark)');
    item.style.filter = 'grayscale(100%)'; // 100% de escala de cinza
    item. style.pointerEvents = "none"; // deixa inacessavel o botao
    			document.getElementById('button4').classList.remove('brilho');
updateWteMarkPosition(item);
}); 

</script>
</body>
</html>
