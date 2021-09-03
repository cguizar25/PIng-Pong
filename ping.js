const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetScore = document.querySelector('#reset')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Button.addEventListener('click', () => {
  if(p1Score !== winningScore && p2Score !== winningScore) {
    p1Score += 1;
    p1Display.textContent = p1Score;
  } else if (p1Score === winningScore || p2Score === winningScore) {
    p1Score += 0;
  }
})

p2Button.addEventListener('click', () => {
  if(p2Score !== winningScore && p1Score !== winningScore) {
    p2Score += 1;
    p2Display.textContent = p2Score;
  } else if (p1Score === winningScore || p2Score === winningScore) {
    p2Score += 0;
  }
})

reset.addEventListener('click', () => {
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
})
