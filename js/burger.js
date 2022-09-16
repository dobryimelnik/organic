const burgerItem = document.querySelector('.burger');
const burgerCloseItem = document.querySelector('.header__nav-close');
const menu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__nav-link');

burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
    burgerItem.classList.add('burger__hidden');
});
burgerCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
    burgerItem.classList.remove('burger__hidden');
});
for (let link of menuLinks) {
    link.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        burgerItem.classList.remove('burger__hidden'); 
    });
};