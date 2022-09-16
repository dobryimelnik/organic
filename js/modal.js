const modalBtns = document.querySelectorAll('.order');// кнопка order now
const modal = document.querySelector('.modal');// модальное окно с изначально поставленным классом hidden

for(let modalBtn of modalBtns) {
    modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    })
    modal.addEventListener('click', (event) => {
        const target = event.target;// получает элемент в модальном окне на который кликнули мышью
        if(target.classList.contains('overlay') || target.classList.contains('modal__close')) { // при клике на элемент с классом overlay или modal__close...
            modal.classList.add('hidden');// модальное окно скрывается
        }
    })
}