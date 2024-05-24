<?php 
    // Definição e Implementação da classe WorldTourEventSystem

    include_once("config.inc");
    include_once("design.inc");
    
    include_once($_SERVER['DOCUMENT_ROOT'].'/config/db_manager_singleton.inc');

    include_once("util.inc");

    abstract class WorldTourEventSystem { 

        abstract public function show();

        protected function checkFirstLogin() {

            Design::checkIE();

            // Vamos fazer o login aqui
                                                DebugLog::Log("[WorldTourEvent::checkFirstLogin] Player Logou com sucesso.");

        } 
		
        protected function sendError() {

			if (!isset($_SESSION))
				session_start();

            // Desloga
			if (isset($_SESSION['player_event']))
				unset($_SESSION['player_event']);
 
            // Redireciona para a página de erro
            header("Location: ".LINKS['UNKNOWN_ERROR']);

            // sai do script para o navegador redirecionar para a página
            exit();
        }
         
        protected function begin() {

            Design::beginHTML();

            Design::beginHead();

            $this->style();
			$this->Scripts();
            // JavaScript
            $this->makeContentHead();
        }

        protected function middle() {

            Design::endHead();
            
            Design::beginBody();
            
            Design::beginContent();
        }

        protected function end() {

            Design::endContent();
            
            Design::endBody();
            
            Design::endHTML();
        }

        protected function style() {

            echo '<style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
        }

        .background-container {
            position: absolute;
            top: 0;
            right: 160px;
            height: 100%;
            width: 100%;
        }

        .background-container img {
            position: absolute;
        }

        .img1 { top: 3px; left: 534px; }
        .img2 { top: 3px; left: 790px; }
        .img3 { top: 259px; left: 534px; }
        .img4 { top: 3px; left: 1046px; }
        .img5 { top: 259px; left: 790px; }
        .img6 { top: 259px; left: 1046px; }
        .img7 { top: 515px; left: 868px; }
        .img8 { top: 515px; left: 534px; }
        .img9 { top: 515px; left: 790px; }
        .img_close { top: 3px; left: 1276px; }
        .img_info { top: 466px; left: 1010px; }
        .img_gift { top: 407px; left: 554px; }
        
        .image_progress {
            top: 267px;
            left: 621px;
            overflow: hidden;
            width: 0px;
            height: 9px;
        }

        .textposition {
            position: absolute;
            top: 167.6px;
            left: 603px;
            overflow: hidden !important;
            word-wrap: break-word;
            color: #ffffff;
        }

        .textposition2 {
            position: absolute;
            top: 116px;
            left: 956px;
            overflow: hidden !important;
            word-wrap: break-word;
            color: #ff0000;
        }

        .img { max-width: 100%; }

        .button {
            position: absolute;
            padding: 10px 20px;
            background-color: #f00;
            color: #fff;
            border: none;
            cursor: pointer;
            display: none;
        }

        .button.active {
            display: block;
        }

        .modal {
            display: none; 
            position: fixed; 
            z-index: 1; 
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%; 
            overflow: auto; 
            background-color: rgba(0,0,0,0.4);  
        }

        .modal-content {
             margin: 15% auto; 
             transform: translateX(-50%); /* Centraliza horizontalmente */
            border: 1px solid #8880;
            width: 22%; 
        }

        .modal-message {
            position: absolute;
            bottom: 53px; /* Coloca a mensagem no topo */
            left: 0;
            width: 100%; /* Garante que a mensagem ocupe toda a largura */
            background-image: url("./include/notice.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            padding: 20px;
        }

       .close {
            color: #f90101;
            position: absolute;
            bottom: 86px;
            left: 320px;
            font-size: 28px;
            font-weight: bold;
            z-index: 1; /* Ajusta o índice z para garantir que esteja à frente */
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        
        #wteMark {
            position: absolute;
        }
    </style>';
        }
 
  // JavaScript
        protected function makeContentHead() {

   echo '<div class="background-container">';
        echo '<img class="img1" src="./include/wte_mainframe_00.png" alt="Image 1">';
        echo '<img class="img2" src="./include/wte_mainframe_01.png" alt="Image 2">';
        echo '<img class="img3" src="./include/wte_mainframe_03.png" alt="Image 3">';
        echo '<img class="img4" src="./include/wte_mainframe_02.png" alt="Image 4">';
        echo '<img class="img5" src="./include/wte_mainframe_04.png" alt="Image 5">';
        echo '<img class="img6" src="./include/wte_mainframe_05.png" alt="Image 6">';
        echo '<img class="img7" src="./include/wte_mainframe_06.png" alt="Image 6">';
        echo '<img class="img8" src="./include/wte_mainframe_07.png" alt="Image 7">';
        echo '<img class="img9" src="./include/wte_mainframe_08.png" alt="Image 8">';
        echo '<img id="deepinferno" class="map-icon" style="top: 245px; left: 883px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_deepinferno_off.png" alt="deep">';
        echo '<img id="shining" class="map-icon" style="top: 278px; left: 1022px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_shining_off.png" alt="shining">';
        echo '<img id="bluelagoon" class="map-icon" style="top: 390px; left:830px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_bluelagoon_off.png" alt="lagoon">';
        echo '<img id="bluewater" class="map-icon" style="top: 404px; left:754px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_bluewater_off.png" alt="water">';
        echo '<img id="pinkwind" class="map-icon" style="top: 323px; left:741px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_pinkwind_off.png" alt="pink">';
        echo '<img id="icecannon" class="map-icon" style="top: 226px; left:590px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_icecannon_off.png" alt="cannon">';
        echo '<img id="icespa" class="map-icon" style="top: 184px; left:640px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_icespa_off.png" alt="ice">';
        echo '<img id="westwiz" class="map-icon" style="top: 206px; left:698px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_westwiz_off.png" alt="west">';
        echo '<img id="windhill" class="map-icon" style="top: 250px; left:740px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_windhill_off.png" alt="hill">';
        echo '<img id="sepiawind" class="map-icon" style="top: 280px; left:668px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_sepiawind_off.png" alt="sepia">';
        echo '<img id="bluemoon" class="map-icon" style="top: 364px; left:650px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_bluemoon_off.png" alt="moon">';
        echo '<img id="silviacannon" class="map-icon" style="top: 447px; left:775px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_silviacannon_off.png" alt="silvia">';
        echo '<img id="iceinferno" class="map-icon" style="top: 190px; left:920px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_iceinferno_off.png" alt="inferno">';
        echo '<img id="abbotmine" class="map-icon" style="top: 220px; left:980px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_abbotmine_off.png" alt="mine">';
        echo '<img id="whitewiz" class="map-icon" style="top: 186px; left:851px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_whitewiz_off.png" alt="white">';
        echo '<img id="wizwiz" class="map-icon" style="top: 186px; left:780px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_wizwiz_off.png" alt="wiz">';
        echo '<img id="wizcity" class="map-icon" style="top: 236px; left:810px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_wizcity_off.png" alt="city">';
        echo '<img id="mysticruins" class="map-icon" style="top: 340px; left:1040px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_mysticruins_off.png" alt="mysticruins">';
        echo '<img id="lostseaway" class="map-icon" style="top: 352px; left:950px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_lostseaway_off.png" alt="lost">';
        echo '<img id="easternvalley" class="map-icon" style="top: 334px; left:880px;" title="Play VS or tourney (18Holes)" src="./include/icon/map_easternvalley_off.png" alt="valley">';
        echo '<a href="DetailsEvent.html" target="_blank" title="Tourn Guide">';
        echo '<img class="img_info" src="./include/wte_help_normal.png" alt="Image 16" onmouseover="changeImage(this, \'_d\')" onmouseout="restoreImage(this, \'_normal\')" onclick="changeImage(this, \'_over\')">';
        echo '</a>';
        echo '<a title="Get Prize!">';
        echo '<img id="btn_gift" class="img_gift" src="./include/wte_gift_normal.png" alt="Image 16" onmouseover="changeImage(this, \'_d\')" onmouseout="restoreImage(this, \'_normal\')" onclick="changeImage(this, \'_over\')">';
        echo '</a>'; 
echo '</div>';

        echo '<div id="modal" class="modal">';
        echo '    <div class="modal-content">';
        echo '        <span class="close">&times;</span>';
        echo '        <div class="modal-message">';
        echo '            The item will be sent to your email.';
        echo '        </div>';
        echo '    </div>';
        echo '</div>';
        }

 protected function Scripts() {

            echo '<script>
function checkAllMapIconsActivated() {
    const mapIcons = document.querySelectorAll(".map-icon");
    let allActivated = true; // Assume inicialmente que todos estão ativados

    mapIcons.forEach(icon => {
        const src = icon.src;
        if (!src.includes("_on")) { // Se algum não estiver ativado, atualiza a variável para false
            allActivated = false;
        }
    });
console.log("on");
    return allActivated;
}

function changeImage(element, suffix) {
    var src = element.src;
    var index = src.lastIndexOf("_");
    if (index !== -1) {
        var newSrc = src.substring(0, index) + suffix + src.substring(src.lastIndexOf("."));
        element.src = newSrc;
        element.setAttribute("data-original-src", src); // Salva o URL original
    }
}
function restoreImage(element, suffix) {
    var src = element.src;
    var index = src.lastIndexOf("_");
    if (index !== -1) {
        var newSrc = src.substring(0, index) + suffix + src.substring(src.lastIndexOf("."));
        element.src = newSrc;
        element.setAttribute("data-original-src", src); // Salva o URL original
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    const mapIcons = document.querySelectorAll(".map-icon:not(#wteMark)");

    function updateWteMarkPosition() {
    mapIcons.forEach(icon => {
        const src = icon.src;
        if (src.includes("_on")) {
            // Extrai as propriedades de posição e converte para número
            const top = parseInt(icon.style.top, 10);
            const left = parseInt(icon.style.left, 10);

            // Cria a imagem wteMark
            const wteMark = document.createElement("img");
            wteMark.id = icon.id + "_wte-mark"; // Define o ID da imagem wte-mark
            wteMark.src = "./include/wte_mark.png";
            wteMark.alt = "WTE Mark";
            wteMark.style.position = "absolute"; // Define a posição como absoluta
            wteMark.classList.add("wte-mark"); // Adiciona a classe wte-mark para estilização

            // Ajusta a posição do wteMark com os valores adicionais
            wteMark.style.top = (top + 24) + "px";
            wteMark.style.left = (left + 9) + "px";

            // Adiciona o wteMark à classe "background-container"
            const backgroundContainer = document.querySelector(".background-container");
            backgroundContainer.appendChild(wteMark);
        }
    });
}



    // Simulate changing the image state to _on and updating the wteMark position
    function activateMap(iconId) {
        const icon = document.getElementById(iconId);
        icon.src = icon.src.replace("_off", "_on");
        updateWteMarkPosition();
    }
let counter = 0;

while(true) {
    switch (counter) { // id off map ;)
        case 0:
            activateMap("bluelagoon");
            break; //BLUE_LAGOON
        case 1:
            activateMap("bluewater");
            break; //BLUE_WATER
        case 2:
            activateMap("sepiawind");
            break; //SEPIA_WIND
        case 3:
            activateMap("windhill");
            break; //WIND_HILL
        case 4:
            activateMap("wizwiz");
            break; //WIZ_WIZ
        case 5:
            activateMap("westwiz");
            break; //WEST_WIZ
        case 6:
            activateMap("bluemoon");
            break; //BLUE_MOON
        case 7:
            activateMap("silviacannon");
            break; //SILVIA_CANNON
        case 8:
            activateMap("icecannon");
            break; //ICE_CANNON
        case 9:
            activateMap("whitewiz");
            break; //WHITE_WIZ
        case 10:
            activateMap("shining");
            break; //SHINNING_SAND
        case 11:
            activateMap("pinkwind");
            break; //PINK_WIND
        case 13:
            activateMap("deepinferno");
            break; //DEEP_INFERNO
        case 14:
            activateMap("icespa");
            break; //ICE_SPA
        case 15:
            activateMap("lostseaway");
            break; //LOST_SEAWAY
        case 16:
            activateMap("easternvalley");
            break; //EASTERN_VALLEY
        case 18:
            activateMap("iceinferno");
            break; //ICE_INFERNO
        case 19:
            activateMap("wizcity");
            break; //WIZ_CITY
        case 20:
            activateMap("abbotmine");
            break; //ABBOT_MINE
        case 21:
            activateMap("mysticruins");
            break; //MYSTIC_RUINS
    }
    counter++;
	if(counter>21)
	break;
}
checkAllMapIconsActivated();    
});

function showModal() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
</script>';
        }
		}
?>