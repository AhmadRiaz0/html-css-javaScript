'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//click on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no corect input
  if (!guess) {
    displayMessage('No number ! 💥');

    //player win
  } else if (guess === secretNumber) {
    displayMessage('Winner ! ✅');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (hightScore < score) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // guess > secretNumber
      //   ? displayMessage('Too hight ! 📈')
      //   : displayMessage('Too low ! 📉');
      displayMessage(guess > secretNumber ? 'Too hight ! 📈' : 'Too low ! 📉');
      score--;
      document.querySelector('.score').textContent = score;
      //Too many try : loser
    } else {
      displayMessage('Looser ! 🏴‍☠️');
      document.querySelector('.score').textContent = score - 1;
    }
  }
});

//click on again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //Message
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
