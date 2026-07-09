// ------ MENU HAMBÚRGUER ------

// pegar elemento
const btnHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('header nav');

// ação de clique
btnHamburguer.addEventListener('click', () => {
    
    btnHamburguer.classList.toggle('aberto');
    
    menuNav.classList.toggle('menu-aberto');
});

/* --- CARROSSEL DE DESTINOS (MOBILE) ---*/

// 1. Selecionamos todos os cartões, a pista onde rolam e as bolinhas
const cartoes = document.querySelectorAll('.card-destino');
const pistaCarrossel = document.querySelector('.cards-destino');
const bolinhas = document.querySelectorAll('.bolinha');

// 2. Só executamos o código se o carrossel existir na tela
if (cartoes.length > 0 && bolinhas.length > 0) {
    
    // 3. Criamos o "Vigia" (IntersectionObserver)
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Se o cartão estiver visível na tela (cruzou o meio)
            if (entrada.isIntersecting) {
                // Descobre qual é o número (índice) desse cartão
                const indice = Array.from(cartoes).indexOf(entrada.target);
                
                // Apaga a cor verde de todas as bolinhas
                bolinhas.forEach(bolinha => bolinha.classList.remove('ativa'));
                
                // Acende a bolinha que tem o mesmo número do cartão
                if(bolinhas[indice]) {
                    bolinhas[indice].classList.add('ativa');
                }
            }
        });
    }, {
        root: pistaCarrossel, // O vigia olha apenas para dentro da área do carrossel
        threshold: 0.5 // O vigia só avisa quando 50% do cartão estiver visível
    });

    // 4. Mandamos o vigia olhar para cada um dos cartões
    cartoes.forEach(cartao => observador.observe(cartao));
}


