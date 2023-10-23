function playCraps(rounds) {
  const results = [];

  for (let i = 0; i < rounds; i++) {
    let point = 0;
    let win = false;

    while (true) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const rollSum = dice1 + dice2;

      if (point === 0) {
        if (rollSum === 7 || rollSum === 11) {
          win = true;
          break;
        } else if (rollSum === 2 || rollSum === 3 || rollSum === 12) {
          win = false;
          break;
        } else {
          point = rollSum;
        }
      } else {
        if (rollSum === 7) {
          win = false;
          break;
        } else if (rollSum === point) {
          win = true;
          break;
        }
      }
    }

    results.push(win ? "Win" : "Lose");
  }

  return results;
}

const rounds = 10; // Change this to the number of rounds you want to play.
const gameResults = playCraps(rounds);
console.log("Game Results:", gameResults);
