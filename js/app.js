const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
});

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
});