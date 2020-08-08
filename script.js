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
const placeForImg = document.querySelector('.section_main-img');
const placeForImgCP = document.querySelector('.CP');
const buttonHit1 = document.querySelector('.hit-player1');
const buttonHit2 = document.querySelector('.hit-player2');
const buttonHit3 = document.querySelector('.hit-player3');
const buttonHit4 = document.querySelector('.hit-player4');
const buttonStay1 = document.querySelector('.stay-player1');
const buttonStay2 = document.querySelector('.stay-player2');
const buttonStay3 = document.querySelector('.stay-player3');
const buttonStay4 = document.querySelector('.stay-player4');
const score1 = document.querySelector('.score-player1');
const score2 = document.querySelector('.score-player2');
const score3 = document.querySelector('.score-player3');
const score4 = document.querySelector('.score-player4');
const scoreCp = document.querySelector('.score-cp');
let gameStart = false;
let gameOver = false;
let play1Won = false;
let play2Won = false;
let play3Won = false;
let play4Won = false;
let dealerCards = [];
let player1Cards = [];
let player2Cards = [];
let player3Cards = [];
let player4Cards = [];
let dealerScore = 0;
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;
let player4Score = 0;


async function getDeckID() {
    await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((response) => {
    return response.json()
    .then((data) => {
        deckID = data.deck_id
    })})
    await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)   
    .then((response) => {
    return response.json()
    .then((data) => {
        deck = data.cards
        return deck  
})})}
getDeckID();      



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
    getDeckID();
    gameStarted = true;
    gameOver = false;
    player1Won = false;
    dealerCards = [getNextCard(), getNextCard()];
    player1Cards = [getNextCard(), getNextCard()];
    // let card1P1 = `<img style="width:90px;height:110px;" src="${deck[0].images.png}" />`;
    // let card2P1 = `<img style="width:90px;height:110px;" src="${deck[1].images.png}" />`; 
    // let card1CP = `<img style="width:90px;height:110px;" src="${deck[2].images.png}" />`;
    // let card2CP = `<img style="width:90px;height:110px;" src="${deck[3].images.png}" />`;
    // placeForImg.innerHTML += card1P1 +=card2P1;
    // placeForImgCP.innerHTML += card1CP += card2CP;
    console.log(deck)
};

const twoPlayers = function() {
    computerSection.style.display = 'none';
    playerThreeSection.style.display = 'none';
    playerFourSection.style.display = 'none';
    getDeckID();
    gameStarted = true;
    gameOver = false;
    player1Won = false;
    player2Won = false;   
    player1Cards = [getNextCard(), getNextCard()];
    player2Cards = [getNextCard(), getNextCard()];
};

const threePlayers = function() { 
    computerSection.style.display = 'none';
    playerFourSection.style.display = 'none';
    getDeckID();
    gameStarted = true;
    gameOver = false;
    player1Won = false;
    player2Won = false;   
    player3Won = false;
    player1Cards = [getNextCard(), getNextCard()];
    player2Cards = [getNextCard(), getNextCard()];
    player3Cards = [getNextCard(), getNextCard()];    
};

const fourPlayers = function() { 
    computerSection.style.display = 'none';  
    getDeckID(); 
    gameStarted = true;
    gameOver = false;
    player1Won = false;
    player2Won = false;   
    player3Won = false;
    player4Won = false;
    player1Cards = [getNextCard(), getNextCard()];
    player2Cards = [getNextCard(), getNextCard()];
    player3Cards = [getNextCard(), getNextCard()]; 
    player3Cards = [getNextCard(), getNextCard()];
    player4Cards = [getNextCard(), getNextCard()];  
};

closeModalBtns.forEach(button => {
    button.addEventListener('click', closeModal)
});
numberOfPlayers.addEventListener('click', openModal);
onePlayerGame.addEventListener('click', onePlayer);
twoPlayersGame.addEventListener('click', twoPlayers);
threePlayersGame.addEventListener('click', threePlayers);
fourPlayersGame.addEventListener('click', fourPlayers);
buttonHit1.addEventListener('click', function(){
    player1Cards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
})

function getNextCard() {
    return deck.shift();
}

function getCardNumericValue(deck){
    switch(deck.value){
      case 'ACE':
        return 11;
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      case '6':
        return 6;
      case '7':
        return 7;
      case '8':
        return 8;
      case '9':
        return 9;
      case 'JACK':
        return 2;
      case 'QUENN':
        return 3;
      case 'KING':
        return 4; 
    }
  }

  






      






// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then((response) => 
       
//         response.json().then((data) => {
//           let api = data;
//           let deckID = api.deck_id;
          
//             fetch('https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=52').then((response) => 

//             response.json().then((data) => {
//                 let wholeDeck = data.cards            
//                 let card1P1 = `<img style="width:90px;height:110px;" src="${wholeDeck[0].images.png}" />`;
//                 let card2P1 = `<img style="width:90px;height:110px;" src="${wholeDeck[1].images.png}" />`;
//                 placeForImg.innerHTML += card1P1 +=card2P1  
//                 let hand1             
                
                
//                 for (let i = 0; i < wholeDeck.length; i++) {
//                     let value = parseInt(wholeDeck[i].value);
//                     if (deck[i].value == "JACK"){
//                     value = 2;
//                     }
//                     if (wholeDeck[i].value == "QUEEN"){
//                         value = 3;
//                     }
//                     if (wholeDeck[i].value == "KING"){
//                         value = 4;
//                     }
//                     if  (wholeDeck[i].value == "ACE"){
//                         value = 11;
//                     }
//                     if(i == 0 || i == 1){
//                     hand1.push(value)
//                     }           
//             }          
//             }))
//         })