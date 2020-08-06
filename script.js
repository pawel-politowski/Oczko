const closeModalBtns = document.querySelectorAll('[data-close-button]');
const modalSection = document.querySelector('.section_modal');
const modalBcg = document.querySelector('.modal-background');
const numberOfPlayers = document.querySelector('.header_button');

const closeModal = function() {       
    modalSection.style.display = 'none';
    modalBcg.style.display = 'none';
    numberOfPlayers.style.display = 'block';       
};

const openModal = function() {
    modalSection.style.display = 'block';
    modalBcg.style.display = 'block';
    numberOfPlayers.style.display = 'none'; 
};

closeModalBtns.forEach(button => {
    button.addEventListener('click', closeModal)
})

numberOfPlayers.addEventListener('click', openModal)

