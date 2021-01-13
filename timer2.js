// don't use process.argv - should listen for user input and set timers on demand
// user can press b and it should beep right away
// user can input any number from 1 to 9 and it should
  // immediately output "setting timer for x seconds"
  // beep after that number of seconds has passed
// user can exit using ctrl + c 
  // program should say "Thanks for using me, ciao!" before terminating

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  process.stdin.setRawMode(true); // as soon as key is pressed, it is sent into stdin (don't need to press enter)
  process.stdin.setEncoding('utf8'); // text encoding
  
  process.stdin.on('keypress', (key) => {
    // on ctrl + c press
    if (key === '\u0003') { // unicode character
      process.stdout.write('Thanks for using me, ciao!\n');
      process.exit();
    } else if (key === 'b') { 
      // on pressing b, it beeps
      process.stdout.write('\x07');
    }
  });
  
  process.stdin.on('data', (input) => {
    if (!isNaN(input) && input > 0 && input < 10) {
      process.stdout.write(`\nSetting timer for ${input} seconds...\n`)
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input * 1000);
    }
  });
  