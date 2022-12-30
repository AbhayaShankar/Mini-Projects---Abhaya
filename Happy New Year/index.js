const toggleButton = document.getElementById("btn");
const myDiv = document.getElementsByClassName("surprise-main").classList;
const surprise = document.getElementById("surprise");
const logo = document.getElementById("year");

toggleButton.addEventListener("click", Function1);

function Function1() {
  logo.src = "./2023.jpg";
  surprise.src = "./HNY.gif";
  surprise.style.width = "35%";
  document.body.classList.toggle("surprise-new");
}
