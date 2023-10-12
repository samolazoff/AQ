const burger = document.querySelector('.burger');
const menuMain = document.querySelector('.menu-main');
const menuPersonal = document.querySelector('.menu-personal');
const headerNav = document.querySelector('.app-header-nav');

burger.addEventListener('click', e=>{
    e.preventDefault();
    if(burger.classList.contains('open')){
        burger.classList.remove('open');
        burger.classList.add('close');
        menuMain.classList.toggle('d-flex');
        menuPersonal.classList.toggle('d-flex');
    }else{
        burger.classList.remove('close');
        burger.classList.add('open');
        menuMain.classList.toggle('d-flex');
        menuPersonal.classList.toggle('d-flex');
    }
});
