var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceLink1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceLink1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceLink2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceLink2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
