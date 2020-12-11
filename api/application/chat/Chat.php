<?php   
    class Chat{

        function __construct($db) {
            $this->db = $db;
        }

        public function sendMessage($name, $message){
			//добавить сообщение
			$this->db->addMessage($name, $message);
			//обновить хеш
			$this->db->updateChatHash();
        }

        public function getMessages($hash){
            $hashDB = $this->db->getChatHash();
			if ($hash != $hashDB['chat_hash']) {
				return array(
					'messages'=>$this->db->getAllMessages(),
					'hash'=>$hashDB['chat_hash']
				);
			}
			return false;
        }
    }