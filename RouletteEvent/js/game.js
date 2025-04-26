
    // Classe BgSound reescrita para compatibilidade com IE7
    function BgSound(src) {
        this.src = src;
        this.loop = false;
        this.element = this.createElement();
    }

    // Adicionando métodos via prototype
    BgSound.prototype.createElement = function() {
        var bgsound = document.getElementById('bgsound');
        if (!bgsound) {
            bgsound = document.createElement('bgsound');
            bgsound.id = 'bgsound';
            document.getElementById("main-page").appendChild(bgsound);
        }
        return bgsound;
    };

    BgSound.prototype.play = function() {
        this.element.src = this.src;
        this.element.loop = this.loop ? -1 : 1; // -1 para loop infinito
    };

    BgSound.prototype.pause = function() {
        this.element.src = ''; // Remove o som
    };

    // Botão de Mute/Unmute
    document.getElementById("mute_unmute").onclick = function() {
        var bgsound = document.getElementById('bgm_teatime');
        if (bgsound.src) {
            bgsound.src = ''; // Silencia
            document.getElementById("mute_unmute").innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            bgsound.src = './Sound/teatime.mp3'; // Som de fundo
            bgsound.loop = 1; // Loop infinito
            document.getElementById("mute_unmute").innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    };
