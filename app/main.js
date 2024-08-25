const process = require("process");
const fs = require('node:fs');
const readline = require('readline');

// This passes the first task!
const file = readline.createInterface({
    input: fs.createReadStream(process.argv[3]),
    output: process.stdout,
    terminal: false
});

file.on('line', (line) => {
    console.log(line);
});
