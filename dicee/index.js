var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1); // outputs a random number between 1 to 6// JavaScript Document

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);


//second di

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2); // outputs a random number between 1 to 6// JavaScript Document

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2; 

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
	
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
	
}

	else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
	}

	else if (randomNumber1 == randomeNumber2) {
		document.querySelector("h1").innerHTML = "🚩 It's a tie!";
	}