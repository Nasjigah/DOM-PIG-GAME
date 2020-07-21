
var scores, roundScore, activePlayer, gamePlaying;

init();







document.querySelector('.btn-roll').addEventListener('click', function() {
    
   if (gamePlaying) {
       
       var dice1 = Math.floor(Math.random() * 6) + 1;
       var dice2 = Math.floor(Math.random() * 6) + 1;
       
       // Display result 
       
       var diceDOM1 = document.querySelector('#dice-1');
       var diceDOM2 = document.querySelector('#dice-2');
       
       diceDOM1.style.display = 'block';
       diceDOM2.style.display = 'block';
       
       diceDOM1.src = 'dice-' + dice1 + '.png';
       diceDOM2.src = 'dice-' + dice2 + '.png'
       
       if (dice1 !== 1 && dice2 !== 1) {
           roundScore += dice1 + dice2;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } else {
                nextPlayer();                      
            }
       
   }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!"
            
            // play audio
            
            var audio = new Audio('winner.mp3');
            audio.play();
            
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    
    //document.getElementById('player-0-panel').classList.add('active');
    //document.getElementById('player-1-panel').classList.remove('active');
    
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    }



















