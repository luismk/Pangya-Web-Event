function startLoading() {
    var width = 0;
    document.getElementById("loading").style.display = "block";
    var audio = document.getElementById("sound-bgm");
    audio.src = "./sounds/bgm.mp3";

    // Função que aumenta a largura da barra
    var interval = setInterval(function() {
        if (width >= 60) {
            clearInterval(interval); // Para quando atingir 60%
            document.getElementById("loading").style.display = "none";
            document.getElementById("body-main").style.backgroundImage = "url('./images/42.jpg')";
            document.getElementById("page").style.display = "block";
        } else {
            width++; // Aumenta a largura em 1%
        }
    }, 14); // Intervalo de 14ms
}

function BuyCoinShop() {
    ShowSoundClick();

    var cookies = document.getElementById("coin-current-balance").innerHTML;
    var cost = document.getElementById("coin-cost").innerHTML;
    var end = document.getElementById("coin-end-balance").innerHTML;
    var qntd = parseInt(document.getElementById("coin-value").innerHTML, 10);
    var gcoin = parseInt(document.getElementById("my-gcoin").innerHTML, 10);

    document.getElementById("my-gcoin").innerHTML = gcoin + qntd;

    document.getElementById("my-cookies").innerHTML = document.getElementById("coin-end-balance").innerHTML;
    alert('Purchase Success!');
    ClosePainelShopConfirm();
}

function OpenPainelShopConfirm(id, value, price) {
    ShowSoundClick();

    var cookies = document.getElementById("my-cookies").innerHTML;
    document.getElementById("coin-value").innerHTML = value;
    document.getElementById("coin-cost").innerHTML = price;
    document.getElementById("text-gacha").innerHTML = "Purchase " + value + " Gacha Coin(s)?";
    document.getElementById("text-gacha").style.display = "block";
    document.getElementById("coin-end-balance").innerHTML = cookies - price;
    document.getElementById("coin-current-balance").innerHTML = cookies;
    document.getElementById("painel-shop-confirm").style.display = "block";
}

function ShowPainelShopConfirm() {
    ShowSoundClick();
    BuyCoinShop();
}

function ClosePainelShopConfirm() {
    ShowSoundClick();
    document.getElementById("painel-shop-confirm").style.display = "none";
    document.getElementById("text-gacha").style.display = "none";
}

function ShowSoundClick() {
    var audio = document.getElementById("sound-click");
    audio.src = "./sounds/Click.mp3"; // Define o caminho do arquivo
}

window.onload = function() {
    var imgEvent = document.getElementById("imgEvent");
    if (imgEvent) {
        imgEvent.src = "./images/event/event_s.jpg"; // Pequena
    }
};

function showEvent() {
    ShowSoundClick();
    document.getElementById("eventContainer").style.display = "flex";
}

function showPlay() {
    setTimeout(function() {
        window.location.href = "gacha_play.html";
    }, 7000);
}

function showHelp() {
    document.getElementById("helpContainer").style.display = "block";
    document.getElementById("painel").style.display = "none";
    document.getElementById("id-container").style.display = "none";
    document.getElementById("id-coin-painel").style.display = "none";
    
    document.getElementById("painel").src = "./images/Forms/form-about.png";
    document.getElementById("painel").style.display = "block";
    ShowSoundClick();
}

function closeEvent() {
    ShowSoundClick();
    document.getElementById("eventContainer").style.display = "none";
}

// Evitar que o clique dentro do conteúdo do evento feche o evento
function eventContentClick(event) {
    event.cancelBubble = true;
}

function containerClick(event) {
    event = event || window.event;
    var target = event.srcElement || event.target;

    var eventContent = document.getElementsByClassName('event-content')[0];
    
    if (!eventContent.contains(target)) {
        closeEvent();
    }
}

// Inicia o carregamento assim que a página carregar
window.onload = startLoading;
