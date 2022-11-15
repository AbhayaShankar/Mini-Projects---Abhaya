const C4 = new Audio("sounds/C4.mp3");
const Db4 = new Audio("sounds/Db4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const Eb4 = new Audio("sounds/Eb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const Gb4 = new Audio("sounds/Gb4.mp3");
const G4 = new Audio("sounds/G4.mp3");
const Ab4 = new Audio("sounds/Ab4.mp3");
const A4 = new Audio("sounds/A4.mp3");
const Bb4 = new Audio("sounds/Bb4.mp3");
const B4 = new Audio("sounds/B4.mp3");
const C5 = new Audio("sounds/C5.mp3");
const Db5 = new Audio("sounds/Db5.mp3");
const D5 = new Audio("sounds/D5.mp3");
const Eb5 = new Audio("sounds/Eb5.mp3");
const E5 = new Audio("sounds/E5.mp3");

const playSound = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => {
    clone;
  }, 1000);
  //   setTimeout(() => (clone.volume = 0.8), 400);
  //   setTimeout(() => (clone.volume = 0.6), 800);
  //   setTimeout(() => (clone.volume = 0.4), 1200);
  //   setTimeout(() => (clone.volume = 0.2), 1600);
  //   setTimeout(() => (clone.volume = 0), 2000);
};

const C4Key = document.querySelector(".white-key-1");
var playC4 = () => {
  playSound(C4);
};
C4Key.addEventListener("click", playC4);

const D4Key = document.querySelector(".white-key-2");
const playD4 = () => {
  playSound(D4);
};
D4Key.addEventListener("click", playD4);

const E4Key = document.querySelector(".white-key-3");
const playE4 = () => {
  playSound(E4);
};
E4Key.addEventListener("click", playE4);

const F4Key = document.querySelector(".white-key-4");
const playF4 = () => {
  playSound(F4);
};
F4Key.addEventListener("click", playF4);

const G4Key = document.querySelector(".white-key-5");
const playG4 = () => {
  playSound(G4);
};
G4Key.addEventListener("click", playG4);

const A4Key = document.querySelector(".white-key-6");
const playA4 = () => {
  playSound(A4);
};
A4Key.addEventListener("click", playA4);

const B4Key = document.querySelector(".white-key-7");
const playB4 = () => {
  playSound(B4);
};
B4Key.addEventListener("click", playB4);

const C5Key = document.querySelector(".white-key-8");
const playC5 = () => {
  playSound(C5);
};
C5Key.addEventListener("click", playC5);

const D5Key = document.querySelector(".white-key-9");
const playD5 = () => {
  playSound(D5);
};
D5Key.addEventListener("click", playD5);

const E5Key = document.querySelector(".white-key-10");
const playE5 = () => {
  playSound(E5);
};
E5Key.addEventListener("click", playE5);
