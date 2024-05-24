<?php 
// Definição e Implementação da classe HoleEventSystem

include_once("config.inc");
include_once("design.inc");
include_once($_SERVER['DOCUMENT_ROOT'].'/config/db_manager_singleton.inc');
include_once("util.inc");

abstract class HoleEventSystem { 

    abstract public function show();

    protected function checkFirstLogin() {
        Design::checkIE();
        // Vamos fazer o login aqui
        DebugLog::Log("[HoleEvent::checkFirstLogin] Player Logou com sucesso.");
    } 

    protected function sendError() {
        if (!isset($_SESSION)) {
            session_start();
        }

        // Desloga
        if (isset($_SESSION['player_event'])) {
            unset($_SESSION['player_event']);
        }

        // Redireciona para a página de erro
        header("Location: " . LINKS['UNKNOWN_ERROR']);

        // Sai do script para o navegador redirecionar para a página
        exit();
    }

    protected function begin() {
        Design::beginHTML();
        Design::beginHead();
        $this->style();
        $this->Scripts();
    }

    protected function middle() {
        Design::endHead();
        Design::beginBody();
        Design::beginContent();
        $this->makeContentHead();
    }

    protected function end() {
        Design::endContent();
        Design::endBody();
        Design::endHTML();
    }

    protected function style() {
        echo '<style>';
        echo 'body, html {';
        echo 'margin: 0;';
        echo 'padding: 0;';
        echo 'height: 100%;';
        echo 'width: 100%;';
        echo 'display: flex;';
        echo 'justify-content: center;';
        echo 'align-items: center;';
        echo 'background: #000;';
        echo '}';
        echo '.background-container {';
        echo 'position: absolute;';
        echo 'top: 0;';
        echo 'right: 160px;';
        echo 'height: 100%;';
        echo 'width: 100%;';
        echo '}';
        echo '.background-container img {';
        echo 'position: absolute;';
        echo '}';
        echo '.img1 { top: 3px; left: 534px; }';
        echo '.img2 { top: 3px; left: 790px; }';
        echo '.img3 { top: 259px; left: 790px; }';
        echo '.img4 { top: 259px; left: 534px; }';
        echo '.image_progress {';
        echo 'top: 267px;';
        echo 'left: 621px;';
        echo 'overflow: hidden;';
        echo 'width: 0px;';
        echo 'height: 9px;';
        echo '}';
        echo '.textposition {';
        echo 'position: absolute;';
        echo 'top: 167.6px;';
        echo 'left: 603px;';
        echo 'overflow: hidden !important;';
        echo 'word-wrap: break-word;';
        echo 'color: #ffffff;';
        echo '}';
        echo '.textposition2 {';
        echo 'position: absolute;';
        echo 'top: 116px;';
        echo 'left: 956px;';
        echo 'overflow: hidden !important;';
        echo 'word-wrap: break-word;';
        echo 'color: #ff0000;';
        echo '}';
        echo '.img { max-width: 100%; }';
        echo '.button {';
        echo 'position: absolute;';
        echo 'padding: 10px 20px;';
        echo 'background-color: #f00;';
        echo 'color: #fff;';
        echo 'border: none;';
        echo 'cursor: pointer;';
        echo 'display: none;';
        echo '}';
        echo '.button.active {';
        echo 'display: block;';
        echo '}';
        echo '.modal {';
        echo 'display: none;';
        echo 'position: fixed;';
        echo 'z-index: 1;';
        echo 'left: 0;';
        echo 'top: 0;';
        echo 'width: 100%;';
        echo 'height: 100%;';
        echo 'overflow: auto;';
        echo 'background-color: rgba(0,0,0,0.4);';
        echo '}';
        echo '.modal-content {';
        echo 'margin: 15% auto;';
        echo 'transform: translateX(-50%);';
        echo 'border: 1px solid #8880;';
        echo 'width: 22%;';
        echo '}';
        echo '.modal-message {';
        echo 'position: absolute;';
        echo 'bottom: 53px;';
        echo 'left: 0;';
        echo 'width: 100%;';
        echo 'background-image: url("./include/notice.jpg");';
        echo 'background-repeat: no-repeat;';
        echo 'background-size: cover;';
        echo 'padding: 20px;';
        echo '}';
        echo '.close {';
        echo 'color: #f90101;';
        echo 'position: absolute;';
        echo 'bottom: 86px;';
        echo 'left: 320px;';
        echo 'font-size: 28px;';
        echo 'font-weight: bold;';
        echo 'z-index: 1;';
        echo '}';
        echo '.close:hover, .close:focus {';
        echo 'color: black;';
        echo 'text-decoration: none;';
        echo 'cursor: pointer;';
        echo '}';
        echo '</style>';
    }

    // JavaScript
    protected function makeContentHead() {
         echo '<img class="img1" src="./include/holes_bg_00.png" alt="Image 1">';
        echo '<img class="img2" src="./include/holes_bg_01.png" alt="Image 2">';
        echo '<img class="img3" src="./include/holes_bg_03.png" alt="Image 3">';
        echo '<img class="img4" src="./include/holes_bg_02.png" alt="Image 4">';
        echo '<img class="img image_progress" src="./include/gauge.png" style="width: 0px;">';
        echo '<span class="textposition line-1" style="font-size: 10px;" id="typedtext">Event End: <?php echo $data_fim_evento;?>_</span>';
        echo '<span class="textposition2 line-1" id="holes">1000</span>';
        echo '<button class="button" id="button0" style="background-color: #f000; top: 377px; left: 630px;"></button>';
        echo '<button class="button" id="button1" style="background-color: #f000; top: 377px; left: 701px;"></button>';
        echo '<button class="button" id="button2" style="background-color: #f000; top: 381px; left: 775px;"></button>';
        echo '<button class="button" id="button3" style="background-color: #f000; top: 381px; left: 846px;"></button>';
        echo '<button class="button" id="button4" style="background-color: #f000; top: 381px; left: 916px;"></button>'; 
     }

    protected function Scripts() {
        echo '<script>';
        echo 'var aText = ["Event End:"];';
        echo 'var iSpeed = 30;';
        echo 'var iIndex = 0;';
        echo 'var iArrLength = aText[0].length;';
        echo 'var iScrollAt = 20;';
        echo 'var iTextPos = 0;';
        echo 'var sContents = "";';
        echo 'var iRow;';
        echo 'function typewriter() {';
        echo 'sContents = " ";';
        echo 'iRow = Math.max(0, iIndex - iScrollAt);';
        echo 'var destination = document.getElementById("typedtext");';
        echo 'while (iRow < iIndex) {';
        echo 'sContents += aText[iRow++] + "<br />";';
        echo '}';
        echo 'destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";';
        echo 'if (iTextPos++ == iArrLength) {';
        echo 'iTextPos = 0;';
        echo 'iIndex++;';
        echo 'if (iIndex != aText.length) {';
        echo 'iArrLength = aText[iIndex].length;';
        echo 'setTimeout(typewriter, 0);';
        echo '}';
        echo '} else {';
        echo 'setTimeout(typewriter, iSpeed);';
        echo '}';
        echo '}';
        echo 'function restart() {';
        echo 'iSpeed = 50;';
        echo 'iIndex = 0;';
        echo 'iArrLength = aText[0].length;';
        echo 'iScrollAt = 20;';
        echo 'iTextPos = 0;';
        echo 'sContents = "";';
        echo 'iRow = 0;';
        echo 'typewriter();';
        echo '}';
        echo 'typewriter();';
        echo 'setInterval(restart, 5000);';
        echo 'function updateProgressBar(totalHoles) {';
        echo 'var progressImage = document.querySelector(".image_progress");';
        echo 'var maxWidth = 339;';
        echo 'var width = (totalHoles / 1000) * maxWidth;';
        echo 'progressImage.style.width = width + "px";';
        echo 'var holes = document.getElementById("holes");';
        echo 'holes.innerText = totalHoles;';
        echo 'if (totalHoles >= 100) {';
        echo 'document.getElementById("button0").classList.add("active");';
        echo '}';
        echo 'if (totalHoles >= 300) {';
        echo 'document.getElementById("button1").classList.add("active");';
        echo '}';
        echo 'if (totalHoles >= 500) {';
        echo 'document.getElementById("button2").classList.add("active");';
        echo '}';
        echo 'if (totalHoles >= 700) {';
        echo 'document.getElementById("button3").classList.add("active");';
        echo '}';
        echo 'if (totalHoles >= 1000) {';
        echo 'document.getElementById("button4").classList.add("active");';
        echo '}';
        echo '}';
        echo 'updateProgressBar(1001);';
        echo 'function changeImage(elementId, imageSrc, top, left) {';
        echo 'var img = document.createElement("img");';
        echo 'img.src = imageSrc;';
        echo 'img.style.position = "absolute";';
        echo 'img.style.top = top + "px";';
        echo 'img.style.left = left + "px";';
        echo 'document.querySelector(".background-container").appendChild(img);';
        echo 'var button = document.getElementById(elementId);';
        echo 'button.style.display = "none";';
        echo 'showModal();';
        echo '}';
        echo 'function showModal() {';
        echo 'var modal = document.getElementById("modal");';
        echo 'var span = document.getElementsByClassName("close")[0];';
        echo 'modal.style.display = "block";';
        echo 'span.onclick = function() {';
        echo 'modal.style.display = "none";';
        echo '}';
        echo 'window.onclick = function(event) {';
        echo 'if (event.target == modal) {';
        echo 'modal.style.display = "none";';
        echo '}';
        echo '}';
        echo '}';
        echo 'document.getElementById("button0").addEventListener("click", function() {';
        echo 'changeImage("button0", "./include/holes_prize_00.png", 328, 611);';
        echo '});';
        echo 'document.getElementById("button1").addEventListener("click", function() {';
        echo 'changeImage("button1", "./include/holes_prize_01.png", 328, 685);';
        echo '});';
        echo 'document.getElementById("button2").addEventListener("click", function() {';
        echo 'changeImage("button2", "./include/holes_prize_02.png", 328, 756);';
        echo '});';
        echo 'document.getElementById("button3").addEventListener("click", function() {';
        echo 'changeImage("button3", "./include/holes_prize_03.png", 328, 827);';
        echo '});';
        echo 'document.getElementById("button4").addEventListener("click", function() {';
        echo 'changeImage("button4", "./include/holes_prize_04.png", 328, 898);';
        echo '});';
        echo '</script>';
    }
}
?>
