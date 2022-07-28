const fs = require('node:fs');

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`); // read stream

const  writeStream = fs.createWriteStream(`${__dirname}output.txt`); //write stream

// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk);
// });


readStream.pipe(writeStream);

console.log('hello');