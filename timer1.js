let node = process.argv;
let timers = node.slice(2, node.length).map((str) => Number(str)).filter((num) => isNaN(num) !== true).sort((a, b) => a - b);


if (timers.length === 0) {
  console.log('No number(s) provided for timer(s).');
  return;
}

for (let time of timers) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}



