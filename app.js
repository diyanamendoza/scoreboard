// import functions and grab DOM elements
const scoreOne = document.querySelector('#score-1');
const scoreTwo = document.querySelector('#score-2');
const ducksButton = document.querySelector('#team-1');
const pigeonsButton = document.querySelector('#team-2');
// initialize state

let ducksScore = 0;
let pigeonsScore = 0;

// set event listeners 

ducksButton.addEventListener('click', () => {
  ducksScore = ducksScore + 7;
  scoreOne.textContent = ducksScore;
} 
)

pigeonsButton.addEventListener('click', () => {
  pigeonsScore = pigeonsScore + 7;
  scoreTwo.textContent = pigeonsScore;
} 
)