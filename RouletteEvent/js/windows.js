
    function windowHandler(_id, WinItem) {
        // Efeito sonoro
        var open = new BgSound('./public/sfx/open_ui.mp3');
        open.play();

        switch(_id) {
            case 0: // Janela de testes
           var icon = "../../img/items/" + WinItem.Icon + ".png";
           var name = WinItem.Name;
                // Cria o elemento da janela
                document.getElementById('windows').innerHTML +=
                    '<div class="draggable-window" id="window-' + _id + '">' +
                        '<div class="window-header">' +
                            '<span>Premio</span>' +
                            '<button type="button" onclick="var cancel = new BgSound(\'./public/sfx/cancel_ui.mp3\'); cancel.play(); closeWindow(' + _id + ');" class="close">X</button>' +
                        '</div>' +
                        '<div class="window-content" id="content-' + _id + '">' +
                           '<span style="left: 120px; top: 39px; text-align: center; position: absolute;">' + name + '</span>' +
                            '<img width="55" style="margin-left: 148px;" src="' + icon + '">' +
                           '</br>' +
                           '<span style="text-align: center; margin-left: 71px;">Você ganhou um item!</span>' +
                            '<span style="text-align: center; margin-left: 58px;">Ele será enviado para sua </span>' +
                            '<span style="text-align: center; margin-left: 63px;">caixa de entrada no jogo.</span>' +
                        '</div>' +
                    '</div>'; 
                // Código de movimentação para a nova janela
                var isDragging = false;
                var offsetX, offsetY;

                // No IE7, vamos usar o método `mousedown` sem jQuery
                document.querySelector('.draggable-window#window-' + _id + ' .window-header').onmousedown = function(e) {
                    isDragging = true;
                    offsetX = e.clientX - this.offsetLeft;
                    offsetY = e.clientY - this.offsetTop;
                };

                document.onmouseup = function () { 
                    isDragging = false; 
                };

                document.onmousemove = function (e) {
                    if (isDragging) {
                        var newX = e.clientX - offsetX;
                        var newY = e.clientY - offsetY;

                        newX = Math.max(0, Math.min(newX, window.innerWidth - document.querySelector('.draggable-window#window-' + _id).offsetWidth));
                        newY = Math.max(0, Math.min(newY, window.innerHeight - document.querySelector('.draggable-window#window-' + _id).offsetHeight));

                        document.querySelector('.draggable-window#window-' + _id).style.top = newY + 'px';
                        document.querySelector('.draggable-window#window-' + _id).style.left = newX + 'px';
                    }
                };

                // Mostrar o overlay
                document.querySelector('.window-overlay').style.display = 'block';

                // Animação para abrir a janela
                var uploadPopup = document.getElementById('window-' + _id);
                uploadPopup.style.animation = "openAnimation 0.2s";

                // Depois que ele abriu, altera o display para "block"
                setTimeout(function() {
                    uploadPopup.style.display = "block";
                }, 150);
                break;

            case 1: // Janela de aviso do sistema
                // Cria o elemento da janela
                document.getElementById('windows').innerHTML +=
                    '<div class="draggable-window" id="window-' + _id + '">' +
                        '<div class="window-header">' +
                            '<span>Aviso</span>' +
                            '<button type="button" onclick="var cancel = new BgSound(\'./public/sfx/cancel_ui.mp3\'); cancel.play(); closeWindow(' + _id + ');" class="close">X</button>' +
                        '</div>' +
                        '<div class="window-content" id="content-' + _id + '">' +
                            '<span>' +
                                'Este sistema foi idealizado como um menu fixo para meu servidor de pangya s8.' +
                                'Originalmente, ele seria como um scratchy do USA, mas como o JP não tinha este sistema, resolvi criar um.' +
                                'Atualmente a API dele não faz conexão com o jogo em si, pois não tenho um servidor para testar.' +
                                'Caso use este projeto, peço que respeite os avisos presentes em todo o código aberto e mantenha o copyright.' +
                                'Assim você valoriza o tempo que tive para desenvolver-lo.' +
                            '</span>' +
							'</br>' +
                            '<span>' +
                                'Atualmente o sistema pede para a API REST gerar um número aleatório, dentre os cadastrados,' +
                                'retornando assim um número, que ao ser passado para o cliente, mostra o item que foi ganho.' +
                                'Em um cenário real você deve conectar esta API ao banco de dados do jogo usando o módulo mysql do node.js,' +
                                'ou o módulo mssql, se conectando ou com o odbc ou por usuário e senha através de um ip/dominio/nome do servidor(local).' +
                            '</span>' +
                        '</div>' +
                    '</div>';

                // Código de movimentação para a nova janela
                var isDragging = false;
                var offsetX, offsetY;

                document.querySelector('.draggable-window#window-' + _id + ' .window-header').onmousedown = function(e) {
                    isDragging = true;
                    offsetX = e.clientX - this.offsetLeft;
                    offsetY = e.clientY - this.offsetTop;
                };

                document.onmouseup = function () { 
                    isDragging = false; 
                };

                document.onmousemove = function (e) {
                    if (isDragging) {
                        var newX = e.clientX - offsetX;
                        var newY = e.clientY - offsetY;

                        newX = Math.max(0, Math.min(newX, window.innerWidth - document.querySelector('.draggable-window#window-' + _id).offsetWidth));
                        newY = Math.max(0, Math.min(newY, window.innerHeight - document.querySelector('.draggable-window#window-' + _id).offsetHeight));

                        document.querySelector('.draggable-window#window-' + _id).style.top = newY + 'px';
                        document.querySelector('.draggable-window#window-' + _id).style.left = newX + 'px';
                    }
                };

                document.querySelector('.window-overlay').style.display = 'block';

                // Animação para abrir a janela
                var uploadPopup = document.getElementById('window-' + _id);
                uploadPopup.style.animation = "openAnimation 0.2s";

                setTimeout(function() {
                    uploadPopup.style.display = "block";
                }, 150);
                break;
        }
    }

    // Fechando janelas
    function closeWindow(id) {
        // Efeito sonoro
        var open = new BgSound('./public/sfx/close_ui.mp3');
        open.play();

        // Animação
        var uploadPopup = document.getElementById('window-' + id);
        uploadPopup.style.animation="closeAnimation 0.2s";
        document.querySelector('.window-overlay').style.display = 'none';

        // Elimina o elemento da DOM
        setTimeout(function() {
            uploadPopup.style.display = "none";
			    uploadPopup.parentNode.removeChild(uploadPopup);  // Remove o elemento do DOM
        }, 150);
    }