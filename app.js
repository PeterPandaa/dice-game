/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


 var score,roundscore,activeplayer,gameplaying;
 init();



document.querySelector('.dice').style.display = 'none';
document.getElementById('current-0').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-1').textContent = 0;


document.querySelector('.btn-roll').addEventListener('click',function(){
	
	if(gameplaying == true){
		var dice = Math.floor(Math.random()*6)+1;
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src='dice-'+dice+'.png';

		if(dice>1){

			roundscore += dice;
			document.querySelector('#current-'+activeplayer).textContent = roundscore ;

		}else{
			
			nextPlayer();
			// activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
		}
	}
	
})


document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
		score[activeplayer] += roundscore;

		document.querySelector('#score-'+activeplayer).textContent = score[activeplayer];

		if(score[activeplayer] >= 30){
			gameplaying = false;	
			document.querySelector('#name-'+activeplayer).textContent = "Winner !";
			document.querySelector('.dice').style.display = "none";
			document.querySelector('.toggle-'+activeplayer).classList.remove('active');
			document.querySelector('.toggle-'+activeplayer).classList.add('winner');

		}else{
			nextPlayer();
		}
		}
})

function nextPlayer(){
	activeplayer = 1-activeplayer;
		roundscore = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.querySelector('.toggle-0').classList.toggle('active');
		document.querySelector('.toggle-1').classList.toggle('active');
		document.querySelector('.dice').style.display = 'none'; 
}

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
	gameplaying = true;
	score=[0,0];
	roundscore = 0;
	activeplayer = 0;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player-1';
	document.querySelector('#name-1').textContent = 'Player-2';


}