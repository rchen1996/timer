// alarm clock/timer that will beep after x time
// user can specify unlimited alarms using command line arguments

// need to get the command line arguments
const input = function() {
  let sliced = process.argv.slice(2);
  return sliced;
}

const timer = function() {
  // this gives us our input times to work with
  let times = input();
  // now need to set a timer at each time
  for (let time of times) {
    if (!isNaN(time) && time >= 0) {
      // checks that it is a number
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
      // time * 1000 because time is in ms, need to * 1000 to get s
    }
  }
}

timer();

// if no numbers are provided - don't beep, end immediately
// input is negative - ignore/skip
// input is NaN - ignore/skip