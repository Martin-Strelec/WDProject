const hamMenu = document.querySelector('.ri-menu-3-line');
const menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');   
})