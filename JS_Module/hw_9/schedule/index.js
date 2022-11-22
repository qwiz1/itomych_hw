import readline from 'readline';
// import { schedule } from './schedule.js';

async function readTerminalInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt(`Enter a day of the week to check schedule (i.e. monday): `);
  rl.prompt();

  for await (const line of rl) {
    import('./schedule.js')
      .then((data) =>
        console.log(
          data.schedule.find(
            (daySchedule) => daySchedule.day === line.toLowerCase(),
          ),
        ),
      )
      .catch((e) => console.log(e));

    console.log('Press ctrl+c to exit');
    rl.prompt();
  }
}
readTerminalInput();
