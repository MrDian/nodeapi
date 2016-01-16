const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log('Thank you for your valuable feedback:', answer);

//   rl.close();
// });

/////////////////////////////////////////////////////////////////////////

// rl.write('Delete me!');
// Simulate ctrl+u to delete the line written previously
// rl.write(null, {ctrl: true, name: 'u'});


////////////////////////////////////////////////////////////////////////
rl.on('line', (cmd) => {
  console.log(`You just typed: ${cmd}`);
});

rl.on('pause', () => {
  console.log('Readline paused.');
});

rl.on('resume', () => {
  console.log('Readline resumed.');
});

rl.on('SIGCONT', () => {
  // `prompt` will automatically resume the stream
  console.log('SIGCONT');
  rl.prompt();
});

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});


