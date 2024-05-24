<?php
// Arquivo design.inc
// Criado em 28/06/2020 as 14:36 por Acrisio
// Definição e Implementação da classe Static Design

include_once('player_singleton.inc');
include_once('config.inc');
include_once('debug_log.inc');

// Tem que ser sem o https, só a página gacha_whats.php, porque se colocar o http o link todo ele reseta a session
const LINKS = [
    'LOGIN_ERROR' => BASE_EVENT_URL . 'unknown_error.html',
    'UNKNOWN_ERROR' => BASE_EVENT_URL . 'unknown_error.html'
];

class Design {

    static public function checkIE() {
        // Código para verificar se o navegador é o Internet Explorer
        // Implementar a lógica aqui, se necessário
    }

    static public function checkLogin() {
        // Código para verificar se o player está conectado
        // Implementar a lógica aqui, se necessário
    }

    static public function beginHTML() {
        echo '<!DOCTYPE html>';
        echo '<html lang="pt-br">';
        echo '<head>';
        echo '<meta charset="UTF-8">';
        echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    }

    static public function endHTML() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();

         echo '</html>';
    }

    static public function beginHead() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();

        echo '<head>';
        echo '<script type="text/javascript" src="./include/Stop_KeyFunction.js"></script>';
    }

    static public function endHead() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();

        echo '</head>';
    }

    static public function beginBody() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();

        echo '<body class="sky">';
    }

    static public function endBody() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();

        echo '</body>';
    }

    static public function beginContent() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();
		        echo '<div class="background-container">';
    }

    static public function endContent() {
        // Verifica se está com navegador correto (acessando pelo ProjectG)
        self::checkIE();

        // Verifica se o player está conectado
        self::checkLogin();
           echo '</div>';
 }
}
?>
