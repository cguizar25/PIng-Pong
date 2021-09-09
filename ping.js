const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

let winningScore = 3;

const resetScore = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

const updateScores = (player, opponent) => {
  if (player.score !== winningScore && opponent.score !== winningScore) {
    player.score += 1;
    player.display.textContent = player.score;
    colorChange();
  } else if (player.score === winningScore || opponent.score === winningScore) {
    player.button.disabled = true;
    opponent.button.disabled = true;
    colorChange();
  }
}

winningScoreSelect.addEventListener('change', () => {
  winningScore = parseInt(winningScoreSelect.value);
  resetto();
});

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
  updateScores(p2, p1)
})

reset.addEventListener('click', resetto);

function resetto() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
  }
}

function colorChange() {
  if (p1.score === winningScore) {
    p1.display.classList.add('winner');
    p2.display.classList.add('loser');
  } else if (p2.score === winningScore) {
    p1.display.classList.add('loser');
    p2.display.classList.add('winner');
  }
}
