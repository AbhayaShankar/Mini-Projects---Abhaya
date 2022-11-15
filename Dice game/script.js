var firstImage = document.querySelector(".img1").getAttribute("src");
console.log(firstImage);

// let random = console.log(Math.round(Math.random() * 5 + 1));
// for checking if random function generates number between 1-6.

//creating two random numbers, both for dice 1 and dice 2 and
//then applying functions on them.

let random1 = Math.round(Math.random() * 5 + 1);
let random2 = Math.round(Math.random() * 5 + 1);
let fun1 = document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + random1 + ".png");

let fun2 = document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + random2 + ".png");

if (random1 > random2) {
  document.getElementById("title").innerHTML = "Player 1 Wins!";
}
if (random1 < random2) {
  document.getElementById("title").innerHTML = "Player 2 Wins!";
}
if (random1 === random2) {
  document.getElementById("title").innerHTML = "Its a Draw";
}
