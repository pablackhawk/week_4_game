$(document).ready(function(){

var targetNumber,
	playerNumber,
	incrementor = [],
	randomNumber,
	c1Value,
	c2Value,
	c3Value,
	c4Value,
	wins = 0,
	losses = 0;

	function generateIncrementor() {
		for (var i = 0; i < 5; i++) {
			randomNumber = (Math.floor(Math.random()*12)+1);
			incrementor.push(randomNumber);
		}
	}



	function gameReset() {
		alert("Play Again?") 
		targetNumber = (Math.floor(Math.random() * 121) + 19);
		console.log(targetNumber);
		playerNumber = 0;
		incrementor = [];

		generateIncrementor();

		c1Value = incrementor[0],
		c2Value = incrementor[1],
		c3Value = incrementor[2],
		c4Value = incrementor[3],

		//This displays the value in console log
		$("#c1").attr("value", incrementor[0]);
		$("#c2").attr("value", incrementor[1]);
		$("#c3").attr("value", incrementor[2]);
		$("#c4").attr("value", incrementor[3]);
	
	}

	function win() {
		alert("You win!!!!");
		wins++;
		$("#wins").text("Wins = " + wins);
		gameReset();
	}

	function loss() {
		alert("You lose! :(");
		losses++;
		$("#losses").text("Losses = " + losses);
		gameReset();
	}
	//game start
	$("#start").on("click", function gameStart(){

		targetNumber = (Math.floor(Math.random() * 100) + 1);

		console.log(targetNumber);
		playerNumber = 0;	
		generateIncrementor();

		
		$(".target").text(targetNumber);
		$(".display").text(playerNumber);

		c1Value = incrementor[0],
		c2Value = incrementor[1],
		c3Value = incrementor[2],
		c4Value = incrementor[3],

		$("#c1").attr("value", incrementor[0]);
		$("#c2").attr("value", incrementor[1]);
		$("#c3").attr("value", incrementor[2]);
		$("#c4").attr("value", incrementor[3]);
		

		$("#wins").text("Wins = " + wins);
		$("#losses").text("Losses = " + losses);


		$("#c1").on('click', function(){
			
			playerNumber = playerNumber + c1Value;
			$(".display").text(playerNumber);
			

			if(playerNumber === targetNumber){
				win();
				
			}

			else if(playerNumber > targetNumber) {
				loss();

			}
		});

		$("#c2").on('click', function(){
			
			playerNumber = playerNumber + c2Value;
			$(".display").text(playerNumber);
			// console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});

		$("#c3").on('click', function(){
			// console.log(c1Value);
			playerNumber = playerNumber + c3Value;
			$(".display").text(playerNumber);
			// console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});

		$("#c4").on('click', function(){
			
			playerNumber = playerNumber + c4Value;
			$(".display").text(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});

	});
});