var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage1 = "dice"+ randomNumber1 +".png";
var randomDiceImage2 = "dice"+ randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage2);

var winner = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    winner.innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    winner.innerHTML = "🚩Player 2 wins!";
}
else{
    winner.innerHTML = "Match draw!";
}

