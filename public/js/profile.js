const backToMenu = document.getElementById('backToMenu');
const backToRoom = document.getElementById('backToRoom');
const main = document.querySelector('.main');
const rules = document.querySelector('.rules');

backToMenu.addEventListener('click', function () {
    profileMain.style.display = 'none';
    main.style.display = 'block';
    rules.style.display = 'block';
});

backToRoom.addEventListener('click', function () {
    profileMain.style.display = 'none';
    gameMain.style.display = 'block';
});