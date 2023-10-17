const permissionsItems = document.querySelectorAll('.app-main-permissions-cont-list-item');
const itemsMain = document.querySelectorAll('.app-main-permissions-cont-list-item-main');
const spanDown = document.querySelector("#span_down");
const spanUp = document.querySelector("#span_up");

function qwer(element, index, array){
    element.addEventListener('click', () => {
        spanDown.classList.toggle('d-none');
        spanUp.classList.toggle('d-none');
        itemsMain[index].classList.toggle('d-none');
    })
}
permissionsItems.forEach(qwer)
