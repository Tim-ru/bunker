const avatar = document.getElementById('avatar');
const menuButton = document.getElementById('menuButton');
const chat = document.querySelector('.chat');
const chat_field = document.querySelector('.chat-field');
const chat_elements = document.querySelector('.chat-elements');
const chat_input = document.getElementById('chat-input');
const send_btn = document.getElementById('send-message');

const server = new Server(callbackGetMessages);

function callbackGetMessages(messages) {
	chat_field.innerHTML = '';
	messages.forEach(message => {
		const div = document.createElement('div');
		div.classList.add('message');
		div.innerText = `${message.name}: ${message.message}`;
        chat_field.appendChild(div);
    });	
}

function newMessage() {
	console.log('new msg');
	const message= chat_input.value;
	if(message) {
		server.sendMessage(message);
        chat_input.value = '';		
	}
    /*const message = document.createElement('div');
    if(chat_input.value.length) {
        message.classList.add('message');
        message.innerText = chat_input.value;
        chat_field.appendChild(message);
        chat_input.value = '';
    }
    
    if (chat_field.offsetHeight > chat.offsetHeight - chat_elements.offsetHeight - 50) {
        chat_field.firstChild.classList.remove("message");
        chat_field.firstChild.classList.add("slide_top");
        console.log(chat_field.firstChild);
        setTimeout(()=>{
            chat_field.firstChild.remove();
        },500)
        
    }*/
}

// отправка сообщения на клавишу enter
send_btn.addEventListener('click', newMessage);
chat_input.addEventListener('keydown', (event)=> {
    if(event.keyCode == '13') {
        newMessage();
    }
});

// анимация кнопки send-message
send_btn.addEventListener('mousedown', function(e) {
    if(chat_input.value.length > 0) {
        document.querySelector(".material-icons").classList.add("cate");
        setTimeout(() => {
            document.querySelector(".material-icons").classList.remove("cate");
        }, 500);
    } else {
        document.querySelector(".material-icons").classList.add("no-touch");
        setTimeout(() => {
            document.querySelector(".material-icons").classList.remove("no-touch");
        }, 500);
    }
});

const gameMain = document.querySelector('.gameMain');
menuButton.addEventListener('click', function () {
    gameMain.style.display = 'none';
    main.style.display = 'block';
    rules.style.display = 'block';
});

const profileMain = document.querySelector('.profileMain');
avatar.addEventListener('click', function () {
    gameMain.style.display = 'none';
    profileMain.style.display = 'block';
});



