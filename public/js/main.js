window.onload = function () {
    // Get the modal
    const modal_reg = document.getElementById('modal-reg');
    const modal_auth = document.getElementById('modal-log');
    const reg_button = document.getElementById('reg-button');
    const log_button = document.getElementById('log-button');
    const reg_prompt = document.getElementById('reg-prompt');
    const mainNav = document.getElementById('mainNav');
    const mainProfileNav = document.querySelector('.mainProfileNav');
    const mainAvatar = document.querySelector('.mainAvatar');
    const names = document.querySelectorAll('.name');

    const server = new Server();
    /*
    const user = new User(server);
    const chat = new Chat(server);
    const game = new Game(server);
    */
  
    reg_button.addEventListener('click', function () {
        modal_reg.style.display = "block";
    });

    log_button.addEventListener('click', function () {
        modal_auth.style.display = "block";
    });

    reg_prompt.addEventListener('click', function () {
        modal_auth.style.display = 'none';
        modal_reg.style.display = 'block';
    });


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_reg) {
            modal_reg.style.display = "none";
        }

        if (event.target == modal_auth) {
            modal_auth.style.display = "none";
        }
    }

    //reg_button.addEventListener('click', document.getElementById('modal-reg').style.display='block')       

    document
        .querySelector('.reg-button')
        .addEventListener('click', async function () {
            const name = document.getElementById('name').value;
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            const result = await server.registration({ name, login, password });
            console.log('регистрация');
            if (result) { // регистрация и логин успешные, войти в игру
                //...
            } else { // показать сообщение об ошибке
                //...
            }
        });

    document.querySelector('#user-login-btn').addEventListener('click', async function () {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const result = await server.login({ login, password });
        console.log('вход');
        if (result) {
            names.forEach((name)=>{
                name.innerText = `${localStorage.name}`;
                mainNav.style.display = 'none';
                mainProfileNav.style.display = 'block';
            })
                // window.location.reload();
                
        } else {
            console.log('sdfs');
        }
    })

    const startGame = document.getElementById('startGame');
    const main = document.querySelector('.main');
    const rules = document.querySelector('.rules');
    const gameMain = document.querySelector('.gameMain');
    const profileMain = document.querySelector('.profileMain');
    
    startGame.addEventListener('click', function () {
        main.style.display = 'none';
        rules.style.display = 'none';
        gameMain.style.display = 'block';
    });

    mainAvatar.addEventListener('click', function () {
        main.style.display = 'none';
        rules.style.display = 'none';
        profileMain.style.display = 'block';
    });
};


