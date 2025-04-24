<?php
 include_once($_SERVER['DOCUMENT_ROOT'] . "/config/db_manager_singleton.inc");
 $my_cookies = 0;
 $my_gcoin = 0;
 $coin_shop = [];
 function getGachaPlayerStatus($uid) {
    $db = DBManagerSingleton::getInstanceDB($GLOBALS['DatabaseCurrentUsed']);
    $params = $db->params;

    $query = 'exec pangya.ProcGetGachaPlayerStatus ?';
    $params->add('i', $uid); 
    $result = $db->db->execPreparedStmt($query, $params->get());

    if ($result && $row = $result->fetch_assoc()) {
        return $row;
    }

    return null; // Retorna null caso não encontre resultados
}

 function getGachaShopCoin() {
    $db = DBManagerSingleton::getInstanceDB($GLOBALS['DatabaseCurrentUsed']);
    $params = $db->params;

    $query = 'exec pangya.ProcGetGachaShopCoin';
    $result = $db->db->execPreparedStmt($query, $params->get(), 1);
    $items = []; // Array para armazenar os itens
    while ($row = $result->fetch_assoc()) { // Itera pelas linhas de resultado
            $items[] = $row;
    }

    return $items; // Retorna os itens encontrados
} 
$coin_shop = getGachaShopCoin(); 
$gacha_player =  getGachaPlayerStatus(75);
$my_cookies = $gacha_player['UserNTreevCoin']; 
$my_gcoin =$gacha_player['UserCoupon']; 
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Gacha</title>
   <link href="./css/main-style.css" rel="stylesheet">
</head>
<body id="body-main">
    <bgsound id="sound-bgm" loop="true">
    <bgsound id="sound-click">
    <bgsound id="sound-play">
    <div class="container" id="main">  
    
    <div class="loading" id="loading" style="display:none">
       <!-- Barra de fundo -->
       <img  id="bar-loading" style="border-radius: 15px;" src="./images/31.png">
       <!-- Imagem visual para aparência da barra -->
       <img id="bar-loading" style="left: 188px; top: 283px; width: 508px; border-radius: 15px;" src="./images/34.jpg">
       <!-- Barra de carregamento que vai aumentar -->
<img id="bar-loading-start" style="top: 241px;left:-864px;border-radius: 15px; position: absolute;" src="./images/37.gif">
     </div>
        <div id="page" style="display: none">
            <img id="painel" src="./images/Forms/form-enter.png">
        <div class="buttons" id="id-container">
            <button class="btn_event" style="left: 384px; top: -73px; position: absolute; transform: scale(1);" onclick="showEvent(event)">
                <img id="imgEvent" src="./images/event/event_s.jpg">
            </button>
            <button class="btn_help" onclick="showHelp()">
                <img alt="How to Play" src="./images/Buttons/btnHelp_n.png">
            </button>
            <button class="btn_play" onclick="ShowSoundClick();showPlay()">
                <img alt="Play Gacha" src="./images/Buttons/btnPlay_n.png">
            </button>
        </div>
        <div class="painel-shop-base" id="painel-shop">
            <div class="coin-painel-container" id="id-coin-painel" style="left: 95px; top: 301px; position: absolute;">
                <img src="./images/Forms/form-painel-coin.png"> 
                <span style="color: #ff8d00; font-style: normal; font-weight: bold;" id="my-gcoin"><?php echo $my_gcoin?></span>  
                <span style="display:none" id="my-cookies"><?php echo $my_cookies?></span>  
                <span id="text-gacha" style="left: 141px; top: -69px; color: white; font-style: normal; font-weight: bold; position: absolute; z-index: 10000;"></span>
                <div class="coin-painel-container-buttons">
      <?php
$positions = [408, 518, 629, 738, 851]; // Posições para os botões

foreach ($coin_shop as $index => $coin) {
    $left = $positions[$index] ?? 408; // Garantir que a posição existe no array
    echo '<button class="btn_buy_coin" 
            style="left: ' . $left . 'px; top: 446px; position: absolute;" 
            onclick="OpenPainelShopConfirm(\'' . $coin['typeid'] . '\', \'' . $coin['qntd'] . '\', \'' . $coin['preco'] . '\')">
            <img alt="Buy Coin" src="./images/Buttons/btnBuyCoin_n.png">
        </button>';
}
?> 
                </div>
            </div> 
            <div class="painel-shop" style="left: 195px;" id="painel-shop-confirm">
                <img src="./images/Forms/form-shop-buy-final.png">
                <span class="coin-count" id="text-coin" style="left: 54px; top: 61px; color: white; font-size: 20px; font-style: normal; font-weight: bold; position: absolute;"></span>
                <button class="btn_buy_coin" style="background: none; border: 51px currentColor; border-image: none; left: 78px; top: 210px; position: absolute; cursor: pointer;" onclick="ShowPainelShopConfirm()">
                    <img src="./images/Buttons/btn_yes_n.png">
                </button>
                <span class="painel-shop-point-current" id="coin-current-balance" style="">0</span>
                <span class="painel-shop-point-cost" id="coin-cost" style="">0</span>
                <span class="painel-shop-point-end" id="coin-end-balance" style="">0</span>
               <span class="painel-shop-point-value" id="coin-value" style="display: none;">0</span>
                <button class="btn_buy_coin" style="background: none; border: 51px currentColor; border-image: none; left: 226px; top: 210px; position: absolute; cursor: pointer;" onclick="ClosePainelShopConfirm()">
                    <img src="./images/Buttons/btn_cancel_n.png">
                </button>
            </div>
        </div> 

        <div class="help-container" id="helpContainer">
            <div class="buttons" style="top: 425px; left: 299px;">
                <button class="btn_play" onclick="showPlay()">
                    <img alt="Play Gacha" src="./images/Buttons/btnPlay_n.png">
                </button>
            </div>			
        </div> 

        <!-- Contêiner para o evento -->
        <div class="event-container" id="eventContainer" onclick="containerClick(event)">
            <div class="event-content" onclick="eventContentClick(event)">
                <img src="./images/event/event_l.jpg"  style="transform: scale(1);" alt="Event Image">
            </div>
        </div>
        </div>
    </div>
    <script src="./js/main-js.js"></script>
</body>
</html> 