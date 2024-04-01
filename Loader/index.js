const $percent = document.querySelector(".percent");
const $circle = document.querySelector(".circle");

let load = 0;

function progress() {
  load += load < 100;
  $percent.innerHTML = load;
  $circle.style.background = `conic-gradient(
    from 0deg at 50% 50%,
    #6f7bf7 0%,
    #9bf8f4 ${load}%,
    #101012 ${load}%
  )`;
}

setInterval(progress, 100);
