// ------ MENU HAMBÚRGUER ------

// pegar elemento
const btnHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('header nav');

// ação de clique
btnHamburguer.addEventListener('click', () => {
    
    btnHamburguer.classList.toggle('aberto');
    
    menuNav.classList.toggle('menu-aberto');
});