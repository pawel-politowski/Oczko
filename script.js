const closeModalBtns = document.querySelectorAll('[data-close-button]');
const modalSection = document.querySelector('.section_modal');
const modalBcg = document.querySelector('.modal-background');
const numberOfPlayers = document.querySelector('.header_button');
const sectionMain = document.querySelector('.section_main');
const onePlayerGame = document.querySelector('.onePlayer');
const twoPlayersGame = document.querySelector('.twoPlayers');
const threePlayersGame = document.querySelector('.threePlayers');
const fourPlayersGame = document.querySelector('.fourPlayers');
const playerOneSection = document.querySelector('.playerOneSection');
const playerTwoSection = document.querySelector('.playerTwoSection');
const playerThreeSection = document.querySelector('.playerThreeSection');
const playerFourSection = document.querySelector('.playerFourSection');
const computerSection = document.querySelector('.computerSection');
let deckID

const closeModal = function() {       
    modalSection.style.display = 'none';
    modalBcg.style.display = 'none';
    numberOfPlayers.style.display = 'block';
    sectionMain.style.display = 'flex';       
};

const openModal = function() {
    modalSection.style.display = 'block';
    modalBcg.style.display = 'block';
    numberOfPlayers.style.display = 'none'; 
    sectionMain.style.display = 'none';
    playerOneSection.style.display = 'flex';
    playerTwoSection.style.display = 'flex';
    playerThreeSection.style.display = 'flex';
    playerFourSection.style.display = 'flex';
    computerSection.style.display = 'flex'
};

const onePlayer = function() {
    playerTwoSection.style.display = 'none';
    playerThreeSection.style.display = 'none';
    playerFourSection.style.display = 'none';
};

const twoPlayers = function() {
    computerSection.style.display = 'none';
    playerThreeSection.style.display = 'none';
    playerFourSection.style.display = 'none';
};

const threePlayers = function() { 
    computerSection.style.display = 'none';
    playerFourSection.style.display = 'none';
};

const fourPlayers = function() { 
    computerSection.style.display = 'none';   
};

closeModalBtns.forEach(button => {
    button.addEventListener('click', closeModal)
});
numberOfPlayers.addEventListener('click', openModal);
onePlayerGame.addEventListener('click', onePlayer);
twoPlayersGame.addEventListener('click', twoPlayers);
threePlayersGame.addEventListener('click', threePlayers);
fourPlayersGame.addEventListener('click', fourPlayers);

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/').then(function(response) {
      if (response.status != 200) {
        window.alert("Oh dangit");
        return;
      }
      response.json().then(function(data) {
        let api = data;
        let deckID = api.deck_id;
        
fetch('https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=52').then(function(response) {
            if (response.status != 200) {
              window.alert("You done messed up");
              return;
            }
            response.json().then(function(data) {
                let firstDeal = data.cards;})
        })})
    })
