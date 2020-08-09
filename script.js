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
const placeForImg1 = document.querySelector('.section_main-img1');
const placeForImg2 = document.querySelector('.section_main-img2');
const placeForImg3 = document.querySelector('.section_main-img3');
const placeForImg4 = document.querySelector('.section_main-img4');
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
const winModal = document.querySelector('.section_modal-win');
const winModalBcg = document.querySelector('.modal-background2');
const winModalTxt = document.querySelector('.modal-winner');
let gameStart1 = false;
let gameStart2 = false;
let gameStart3 = false;
let gameStart4 = false;
let gameStartCP = false;
let gameOver1 = false;
let gameOver2 = false;
let gameOver3 = false;
let gameOver4 = false;
let play1Won = false;
let play2Won = false;
let play3Won = false;
let play4Won = false;
let gameDraw = false;
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

window.onload = function(){
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
    
    closeModalBtns.forEach(button => {
        button.addEventListener('click', closeModal)
    });
    numberOfPlayers.addEventListener('click', openModal);

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then((response) => {
        response.json()
        .then((data) => {
            deckID = data.deck_id
        
        fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)   
        .then((response) => {
        response.json()
        .then((data) => {
            let deck = data.cards
            const onePlayer = function() {   
                playerTwoSection.style.display = 'none';
                playerThreeSection.style.display = 'none';
                playerFourSection.style.display = 'none';                
                gameStart1 = true;
                gameStartCP = true;
                gameOver1 = false;
                player1Won = false;
                dealerCards = [getNextCard(), getNextCard()];
                player1Cards = [getNextCard(), getNextCard()];
                showStatus();                           
            };
            
            const twoPlayers = function() {
                computerSection.style.display = 'none';
                playerThreeSection.style.display = 'none';
                playerFourSection.style.display = 'none';              
                gameStart1 = true;
                gameStart2 = true;
                gameOver1 = false;
                gameOver2 = false;    
                player1Won = false;
                player2Won = false;   
                player1Cards = [getNextCard(), getNextCard()];
                player2Cards = [getNextCard(), getNextCard()];
                showStatus();
            };
            
            const threePlayers = function() { 
                computerSection.style.display = 'none';
                playerFourSection.style.display = 'none';               
                gameStart1 = true;
                gameStart2 = true;
                gameStart3 = true;
                gameOver1 = false;
                gameOver2 = false;
                gameOver3 = false;
                player1Won = false;
                player2Won = false;   
                player3Won = false;
                player1Cards = [getNextCard(), getNextCard()];
                player2Cards = [getNextCard(), getNextCard()];
                player3Cards = [getNextCard(), getNextCard()];
                showStatus();  
            };
            
            const fourPlayers = function() { 
                computerSection.style.display = 'none';                  
                gameStart1 = true;
                gameStart2 = true;
                gameStart3 = true;
                gameStart4 = true;
                gameOver1 = false;
                gameOver2 = false;
                gameOver3 = false;
                player1Won = false;
                player2Won = false;   
                player3Won = false;
                player4Won = false;
                player1Cards = [getNextCard(), getNextCard()];
                player2Cards = [getNextCard(), getNextCard()];
                player3Cards = [getNextCard(), getNextCard()];   
                player4Cards = [getNextCard(), getNextCard()];  
                showStatus();
            };            
            
            onePlayerGame.addEventListener('click', onePlayer);
            twoPlayersGame.addEventListener('click', twoPlayers);
            threePlayersGame.addEventListener('click', threePlayers);
            fourPlayersGame.addEventListener('click', fourPlayers);
            
            buttonHit1.addEventListener('click', function(){
                player1Cards.push(getNextCard());
                checkForEndOfGame();
                showStatus();
            })
            buttonHit2.addEventListener('click', function(){
                player2Cards.push(getNextCard());
                checkForEndOfGame();
                showStatus();
            })
            buttonHit3.addEventListener('click', function(){
                player3Cards.push(getNextCard());
                checkForEndOfGame();
                showStatus();
            })
            buttonHit4.addEventListener('click', function(){
                player4Cards.push(getNextCard());
                checkForEndOfGame();
                showStatus();
            })

            buttonStay1.addEventListener('click', function(){
                gameOver1 = true;
                checkForEndOfGame();
                showStatus();
            })
            buttonStay2.addEventListener('click', function(){
                gameOver2 = true;
                checkForEndOfGame();
                showStatus();
            })
            buttonStay3.addEventListener('click', function(){
                gameOver3 = true;
                checkForEndOfGame();
                showStatus();
            })
            buttonStay4.addEventListener('click', function(){
                gameOver4 = true;
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
                  case '10':
                    return 10;
                  case 'JACK':
                    return 2;
                  case 'QUEEN':
                    return 3;
                  case 'KING':
                    return 4; 
                }
            }
            
            function getScore(cardArray){
                let score = 0;    
                for(let i=0; i<cardArray.length; i++){
                  let card = cardArray[i];
                  score += getCardNumericValue(card); 
                }
                 return score; 
              }
              
              function updateScores(){
                dealerScore = getScore(dealerCards);
                player1Score = getScore(player1Cards); 
                player2Score = getScore(player2Cards); 
                player3Score = getScore(player3Cards); 
                player4Score = getScore(player4Cards);                 
              }
              

              function showStatus() {                    
                    let dealerCardsImg = '';
                    for(let i=0; i<dealerCards.length; i++)
                    {
                        dealerCardsImg += `<img style="width:90px;height:110px;" src="${dealerCards[i].images.png}" />` ;
                        
                    }
                    
                    let playerCards1Img = '';
                    for(let i=0; i<player1Cards.length; i++)
                    {
                        playerCards1Img += `<img style="width:90px;height:110px;" src="${player1Cards[i].images.png}" />`;
                    }
                   
                    let playerCards2Img = '';
                    for(let i=0; i<player2Cards.length; i++)
                    {
                        playerCards2Img += `<img style="width:90px;height:110px;" src="${player2Cards[i].images.png}" />`;
                    }

                    let playerCards3Img = '';
                    for(let i=0; i<player3Cards.length; i++)
                    {
                        playerCards3Img += `<img style="width:90px;height:110px;" src="${player3Cards[i].images.png}" />`;
                    }

                    let playerCards4Img = '';
                    for(let i=0; i<player4Cards.length; i++)
                    {
                        playerCards4Img += `<img style="width:90px;height:110px;" src="${player4Cards[i].images.png}" />`;
                    }
                    
                    updateScores();

                    placeForImgCP.innerHTML = dealerCardsImg;
                    placeForImg1.innerHTML = playerCards1Img;
                    placeForImg2.innerHTML = playerCards2Img;
                    placeForImg3.innerHTML = playerCards3Img;
                    placeForImg4.innerHTML = playerCards4Img;
                    score1.innerText = `Wynik: ${player1Score}`
                    score2.innerText = `Wynik: ${player2Score}`
                    score3.innerText = `Wynik: ${player3Score}`
                    score4.innerText = `Wynik: ${player4Score}`
                    scoreCp.innerText = `Wynik: ${dealerScore}`
                                            
                    if(gameStart1 && gameStartCP && gameOver1){
                        winModal.style.display = "block";
                        winModalBcg.style.display = "block";
                        if(player1Won) {                       
                        winModalTxt.innerText += "WYGRAŁEŚ!";
                        }
                        else{
                        winModalTxt.innerText += "TYM RAZEM PRZEGRAŁEŚ!";
                        }                        
                    }
                    if(gameStart1 && gameStart2 && !gameStart3 && gameOver1 && gameOver2){
                        winModal.style.display = "block";
                        winModalBcg.style.display = "block";
                        if(player1Won) {                       
                        winModalTxt.innerText += "ZAWODNIK 1 ZWYCIĘZCĄ!";
                        }
                        else if(player2Won) {
                        winModalTxt.innerText += "ZAWODNIK 2 ZWYCIĘZCĄ!";
                        }  
                        else{
                        winModalTxt.innerText += "REMIS!";
                        }                      
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && gameOver1 && gameOver2 && gameOver3){
                        winModal.style.display = "block";
                        winModalBcg.style.display = "block";
                        if(player1Won) {                       
                        winModalTxt.innerText += "ZAWODNIK 1 ZWYCIĘZCĄ!";
                        }
                        else if(player2Won) {
                        winModalTxt.innerText += "ZAWODNIK 2 ZWYCIĘZCĄ!";
                        }  
                        else if(player3Won) {
                        winModalTxt.innerText += "ZAWODNIK 3 ZWYCIĘZCĄ!";
                        }
                        else{
                        winModalTxt.innerText += "REMIS!";
                        }                      
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && gameOver1 && gameOver2 && gameOver3 && gameOver4){
                        winModal.style.display = "block";
                        winModalBcg.style.display = "block";
                        if(player1Won) {                       
                        winModalTxt.innerText += "ZAWODNIK 1 ZWYCIĘZCĄ!";
                        }
                        else if(player2Won) {
                        winModalTxt.innerText += "ZAWODNIK 2 ZWYCIĘZCĄ!";
                        }  
                        else if(player3Won) {
                        winModalTxt.innerText += "ZAWODNIK 3 ZWYCIĘZCĄ!";
                        }
                        else if(player4Won) {
                        winModalTxt.innerText += "ZAWODNIK 4 ZWYCIĘZCĄ!";
                        }
                        else{
                        winModalTxt.innerText += "REMIS!";
                        }                      
                    }
                }
            
              function checkForEndOfGame(){
                updateScores();
                
                if(gameOver1 && gameStart1 && gameStartCP){
                  while(dealerScore<player1Score &&
                        player1Score <=21 &&
                        dealerScore <=21){
                          dealerCards.push(getNextCard());
                          updateScores();
                  }
                }
                  
                if(player1Score>21 && gameStart1 && gameStartCP){
                    player1Won=false;
                    gameOver1 = true;
                }
                  
                  else if(dealerScore>21 && gameStart1 && gameStartCP){
                    player1Won = true;
                    gameOver1 = true;
                  }
                  
                  else if(gameOver1 && gameStart1 && gameStartCP){
                    if(player1Score>dealerScore){
                      player1Won = true;
                    }
                    else{
                      player1Won = false;
                    }
                  }
                if(player1Score>21 && gameStart1 && gameStart2 && !gameStart3){
                    player1Won = false;
                    gameOver1 = true;
                    player2Won = true;
                    gameOver2 = true;
                  }
                if(player2Score>21 && gameStart1 && gameStart2 && !gameStart3){
                    player1Won = true;
                    gameOver1 = true;
                    player2Won = false;
                    gameOver2 = true;
                }
                if(player1Score<=21 && player2Score<=21 && gameStart1 && gameStart2 && !gameStart3){
                   if(player1Score < player2Score){
                    player1Won = false;                    
                    player2Won = true;                    
                   }
                   else {
                    gameDraw = true;
                    player1Won = false;
                    player2Won = false;                            
                   }
                }
                if(player1Score>21 && player2Score>21 && gameStart1 && gameStart2 && gameStart3 && !gameStart4){
                    player1Won = false;
                    gameOver1 = true;
                    player2Won = false;
                    gameOver2 = true;
                    player3Won = true;
                    gameOver3 = true;
                }
                if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score<=21 && player2Score>21 && player3Score>21){
                    player1Won = true;                    
                    player2Won = false;
                    gameOver2 = true;
                    player3Won = false;
                    gameOver3 = true;
                }
                if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score>21 && player2Score<=21 && player3Score>21){
                    player1Won = false;
                    gameOver1 = true;
                    player2Won = true;                    
                    player3Won = false;
                    gameOver3 = true;
                }
                if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score>21 && player2Score>21){
                    player1Won = false;
                    gameOver1 = true;
                    player2Won = false;
                    gameOver2 = true;
                    player3Won = true;
                    gameOver3 = true;
                }
                if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score<=21 && player2Score<=21 && player3Score>21){
                    if(player1Score>player2Score){
                        player1Won = true;                        
                        player2Won = false;                        
                        player3Won = false;
                        gameOver3 = true;
                    }
                    else if(player1Score<player2Score){
                        player1Won = false;                       
                        player2Won = true;                    
                        player3Won = false;
                        gameOver3 = true;
                    }
                    else{
                        gameDraw = true;
                        player1Won = false;                     
                        player2Won = false;                
                        player3Won = false;
                        gameOver3 = true;
                    }
                }
                    if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score<=21 && player2Score>21 && player3Score<=21){
                        if(player1Score>player3Score){
                            player1Won = true;                       
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;                        
                        }
                        else if(player1Score<player3Score){
                            player1Won = false;                   
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = true;                     
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                        
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;                            
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && !gameStart4 && player1Score>21 && player2Score<=21 && player3Score<=21){
                        if(player1Score<player2Score){
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                            
                            player3Won = true;                       
                        }                
                        else{
                            gameDraw = true;
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                        
                            player3Won = false;                                  
                        }  
                    }                    
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score>21 && player3Score>21 && player4Score>21){
                        player1Won = true;                       
                        player2Won = false;
                        gameOver2 = true;
                        player3Won = false;
                        gameOver3 = true;
                        player4Won = false;
                        gameOver4 = true;
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score<=21 && player3Score>21 && player4Score>21){
                        player1Won = false;
                        gameOver1 = true;
                        player2Won = true;                        
                        player3Won = false;
                        gameOver3 = true;
                        player4Won = false;
                        gameOver4 = true;
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score>21 && player3Score<=21 && player4Score>21){
                        player1Won = false;
                        gameOver1 = true;
                        player2Won = false;
                        gameOver2 = true;
                        player3Won = true;                        
                        player4Won = false;
                        gameOver4 = true;
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score>21 && player3Score>21){
                        player1Won = false;
                        gameOver1 = true;
                        player2Won = false;
                        gameOver2 = true;
                        player3Won = false;
                        gameOver3 = true;
                        player4Won = true;
                        gameOver4 = true;
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score<=21 && player3Score>21 && player4Score>21){
                        if(player1Score>player2Score){
                            player1Won = true;                            
                            player2Won = false;                            
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else if(player1Score<player2Score){
                            player1Won = false;                            
                            player2Won = true;                           
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                           
                            player2Won = false;                           
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = false;
                            gameOver4 = true;
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score>21 && player3Score<=21 && player4Score>21){
                        if(player1Score>player3Score){
                            player1Won = true;                           
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;                           
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else if(player1Score<player3Score){
                            player1Won = false;                           
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = true;                            
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                        
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;                         
                            player4Won = false;
                            gameOver4 = true;
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score>21 && player3Score>21 && player4Score<=21){
                        if(player1Score>player4Score){
                            player1Won = true;                           
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = false;                           
                        }
                        else if(player1Score<player4Score){
                            player1Won = false;                            
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = true;                            
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                            
                            player2Won = false;
                            gameOver2 = true;
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = false;                            
                    }
                } 
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score<=21 && player3Score<=21 && player4Score>21){
                        if(player2Score>player3Score){
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = true;                            
                            player3Won = false;                           
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else if(player2Score<player3Score){
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                            
                            player3Won = true;                            
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                           
                            player3Won = false;                            
                            player4Won = false;
                            gameOver4 = true;
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score<=21 && player3Score>21 && player4Score<=21){
                            if(player2Score>player4Score){
                                player1Won = false;
                                gameOver1 = true;
                                player2Won = true;                                
                                player3Won = false;
                                gameOver3 = true;
                                player4Won = false;                                
                            }
                            else if(player2Score<player4Score){
                                player1Won = false;
                                gameOver1 = true;
                                player2Won = false;                                
                                player3Won = false;
                                gameOver3 = true;
                                player4Won = true;                                
                            }
                            else{
                                gameDraw = true;
                                player1Won = false;
                                gameOver1 = true;
                                player2Won = false;                                
                                player3Won = false;
                                gameOver3 = true;
                                player4Won = false;                               
                            }
                     }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score>21 && player3Score<=21 && player4Score<=21){
                                if(player3Score>player4Score){
                                    player1Won = false;
                                    gameOver1 = true;
                                    player2Won = false;
                                    gameOver2 = true;
                                    player3Won = true;                                    
                                    player4Won = false;                                    
                                }
                                else if(player3Score<player4Score){
                                    player1Won = false;
                                    gameOver1 = true;
                                    player2Won = false;
                                    gameOver2 = true;
                                    player3Won = false;                                   
                                    player4Won = true;                                    
                                }
                                else{
                                    gameDraw = true;
                                    player1Won = false;
                                    gameOver1 = true;
                                    player2Won = false;
                                    gameOver2 = true;
                                    player3Won = false;                                    
                                    player4Won = false;                                    
                                }
                        }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score<=21 && player3Score<=21 && player4Score>21){
                        if(player1Score < player3Score && player2Score == player3Score){                
                            player1Won = false;                           
                            player2Won = false;                           
                            player3Won = true;                           
                            player4Won = false;
                            gameOver4 = true;
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                            
                            player2Won = false;                           
                            player3Won = true;                            
                            player4Won = false;
                            gameOver4 = true;
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score<=21 && player3Score>21 && player4Score<=21){
                        if(player1Score<player4Scor && player2Score<player4Score){                
                            player1Won = false;                            
                            player2Won = false;                            
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = true;                            
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                            
                            player2Won = false;                           
                            player3Won = false;
                            gameOver3 = true;
                            player4Won = true;                            
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score>21 && player2Score<=21 && player3Score<=21 && player4Score<=21){
                        if(player2Score < player4Score && player3Score < player4Score){               
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                            
                            player3Won = false;                            
                            player4Won = true;                           
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;
                            gameOver1 = true;
                            player2Won = false;                            
                            player3Won = false;                            
                            player4Won = false;                            
                        }
                    }
                    if(gameStart1 && gameStart2 && gameStart3 && gameStart4 && player1Score<=21 && player2Score<=21 && player3Score<=21 && player4Score<=21){
                        if(player1Score < player4Score && player2Score < player4Score && player3Score < player4Score){
                            player1Won = false;                            
                            player2Won = false;                           
                            player3Won = false;                            
                            player4Won = true;                         
                        }
                        else{
                            gameDraw = true;
                            player1Won = false;                           
                            player2Won = false;                            
                            player3Won = false;                           
                            player4Won = false;                            
                        }        
              }
            }
            
    
})})})})} 

 

