$(document).ready(function(){

var targetNumber,
	playerNumber,
	incrementor = [10, 5, 3, 1],
	c1Value,
	c2Value,
	c3Value,
	c4Value,
	wins = 0,
	losses = 0;


	function shuffleArray(array) {
    	for (var i = array.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	var temp = array[i];
        	array[i] = array[j];
        	array[j] = temp;
    	}
    	return array;
	}
	


	function gameReset() {
		alert("Play Again?") 
		targetNumber = (Math.floor(Math.random() * 100) + 1);
		console.log(targetNumber);
		playerNumber = 0;

		var newShuffleArray = shuffleArray(incrementor);

		 c1Value = newShuffleArray[0],
		 c2Value = newShuffleArray[1],
		 c3Value = newShuffleArray[2],
		 c4Value = newShuffleArray[3];
		
		$(".target").text(targetNumber);
		$(".display").text(playerNumber);
		$("#c1").attr("value", newShuffleArray[0]);
		$("#c2").attr("value", newShuffleArray[1]);
		$("#c3").attr("value", newShuffleArray[2]);
		$("#c4").attr("value", newShuffleArray[3]);

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

	$("#start").on("click", function gameStart(){
		targetNumber = (Math.floor(Math.random() * 100) + 1);

		console.log(targetNumber);
		playerNumber = 0;	
		
		var newShuffleArray = shuffleArray(incrementor);
		
		$(".target").text(targetNumber);
		$(".display").text(playerNumber);

		    c1Value = newShuffleArray[0],
			c2Value = newShuffleArray[1],
			c3Value = newShuffleArray[2],
			c4Value = newShuffleArray[3];

		$("#c1").attr("value", newShuffleArray[0]);
		$("#c2").attr("value", newShuffleArray[1]);
		$("#c3").attr("value", newShuffleArray[2]);
		$("#c4").attr("value", newShuffleArray[3]);

		$("#wins").text("Wins = " + wins);
		$("#losses").text("Losses = " + losses);


		$("#c1").on('click', function(){
			console.log(c1Value);
			playerNumber = playerNumber + c1Value;
			$(".display").text(playerNumber);
			console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
				
			}

			else if(playerNumber > targetNumber) {
				loss();

			}
		});

		$("#c2").on('click', function(){
			console.log(c1Value);
			playerNumber = playerNumber + c2Value;
			$(".display").text(playerNumber);
			console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});

		$("#c3").on('click', function(){
			console.log(c1Value);
			playerNumber = playerNumber + c3Value;
			$(".display").text(playerNumber);
			console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});

		$("#c4").on('click', function(){
			console.log(c1Value);
			playerNumber = playerNumber + c4Value;
			$(".display").text(playerNumber);
			console.log(playerNumber);

			if(playerNumber === targetNumber){
				win();
			}

			else if(playerNumber > targetNumber) {
				loss();
			}
		});


		});




});