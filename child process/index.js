const { spawn } = require('child_process');

// Spawn a child process to execute the "ls" command
const ls = spawn('ls', ['-lh', '/usr']);

// Listen for stdout data from the child process
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Listen for stderr data from the child process
ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Listen for the child process to exit
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
