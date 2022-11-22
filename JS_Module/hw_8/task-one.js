import readline from 'readline';

const MIN = 1;
const MAX = 6;

let totalPoints = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPointsForGuess(guess, secretNumber) {
  let points = 0;
  if (guess === secretNumber) {
    points += 2;
    console.log('\n------- Congratulation ! -------');
    console.log('---- Let`s guess new number ----');
  }
  if (guess === secretNumber - 1 || guess === secretNumber + 1) {
    points += 1;
    console.log('\n-------- You are close! --------');
  } else if (guess > secretNumber || guess < secretNumber) {
    console.log('\n------------- Cold -------------');
  }
  console.log('\n----- Enter ctrl+c to exit -----');
  return points;
}

async function start() {
  const secretNumber = getRandomNumber(MIN, MAX);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt(
    `\n--------------------------------\n
    Guess a number (${MIN}, ${MAX}): `,
  );
  rl.prompt();

  for await (const line of rl) {
    const currentPoints = getPointsForGuess(Number(line), secretNumber);
    totalPoints += currentPoints;

    if (currentPoints === 2) {
      console.log(`\n-------- Your points: ${totalPoints} --------`)
      rl.close();
      start();
    }
    rl.prompt();
  }
}

start();
