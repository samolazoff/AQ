const burger = document.querySelector('.burger');

burger.addEventListener('click', e=>{
    e.preventDefault();
    if(burger.classList.contains('open')){
        burger.classList.remove('open');
        burger.classList.add('close');
    }else{
        burger.classList.remove('close');
        burger.classList.add('open');
    }
})
