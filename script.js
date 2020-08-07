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
    createDeck();  
    console.log(deck)     
};

const twoPlayers = function() {
    computerSection.style.display = 'none';
    playerThreeSection.style.display = 'none';
    playerFourSection.style.display = 'none';
    createDeck();
};

const threePlayers = function() { 
    computerSection.style.display = 'none';
    playerFourSection.style.display = 'none';
    createDeck();
};

const fourPlayers = function() { 
    computerSection.style.display = 'none';  
    createDeck(); 
};

closeModalBtns.forEach(button => {
    button.addEventListener('click', closeModal)
});
numberOfPlayers.addEventListener('click', openModal);
onePlayerGame.addEventListener('click', onePlayer);
twoPlayersGame.addEventListener('click', twoPlayers);
threePlayersGame.addEventListener('click', threePlayers);
fourPlayersGame.addEventListener('click', fourPlayers);


function createDeck() { 
            
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then((response) => response.json()
        .then((data) => {           
          let api = data;
          let deckID = api.deck_id;
          
    fetch('https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=52')
        .then((response) => response.json()
        .then((data) => {
            let deck = data.cards        
        }))               
    })) 
    return deck          
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
//                     if (wholeDeck[i].value == "JACK"){
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
// )

    
