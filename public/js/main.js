
window.onload = function() {
    // Get the modal
    var modal_reg = document.getElementById('id01');
    var modal_auth = document.getElementById('id02');

    const server = new Server();
    /*
    const user = new User(server);
    const chat = new Chat(server);
    const game = new Game(server);
    */

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal_reg) {
            modal_reg.style.display = "none";
        }

        if (event.target == modal_auth) {
            modal_auth.style.display = "none";
        }
    }

    document
        .querySelector('.log_button')
        .addEventListener('click', async function() {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            console.log(await server.login({ login, password }));
            console.log(await server.logout());
        });
};