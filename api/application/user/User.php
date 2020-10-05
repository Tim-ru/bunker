<?php
class User {

    function __construct($db) {
        $this->db = $db;
    }

    public function login($login, $password) {
        if ($login == 'vasya' && $password == '123456') {
            $token = md5(rand());
            return array(
                'name' => $login,
                'token' => $token
            );
        }
    }
}