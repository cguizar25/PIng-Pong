const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetScore = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3

winningScoreSelect.addEventListener('change', () => {
  winningScore = parseInt(winningScoreSelect.value);
  resetto();
});

p1Button.addEventListener('click', () => {
  if (p1Score !== winningScore && p2Score !== winningScore) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    colorChange();
  } else if (p1Score === winningScore || p2Score === winningScore) {
    p1Score += 0;
    colorChange();
  }
})

p2Button.addEventListener('click', () => {
  if(p2Score !== winningScore && p1Score !== winningScore) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    colorChange();
  } else if (p1Score === winningScore || p2Score === winningScore) {
    p2Score += 0;
    colorChange();
  }
})

reset.addEventListener('click', resetto);

function resetto() {
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('loser', 'winner');
}

function colorChange() {
  if (p1Score === winningScore) {
    p1Display.classList.add('winner');
    p2Display.classList.add('loser');
  } else if (p2Score === winningScore) {
    p1Display.classList.add('loser');
    p2Display.classList.add('winner');
  }
}
