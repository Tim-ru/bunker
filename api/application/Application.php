<?php
require_once ('db/DB.php');
require_once ('user/User.php');
require_once ('chat/Chat.php');
require_once ('game/Game.php');

class Application {
    function __construct(){
        $db = new DB();
        $this->user = new User($db);
    }

    public function login($params){
        if($params['login'] && $params ['password']) {
            return $this->user->login($params['login'], $params['password']);
        }
    }
}