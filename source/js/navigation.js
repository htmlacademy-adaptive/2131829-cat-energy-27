let navMain=document.querySelector('.main-navigation');
let navToggle=document.querySelector('.main-navigation__toggle');
navMain.classList.remove('main-navigation--nojs');
navMain.classList.add('main-navigation--closed');
navToggle.addEventListener('click', function () {
navMain.classList.toggle('main-navigation--closed');
});
