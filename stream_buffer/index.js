const fs  = require('node:fs');

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

readStream.on('data', (chunk)=>{
    console.log(chunk.toString());
})


// fs.readFile('bigdata.txt',(err,data)=>{
//     if(err){
//         throw  err;
//     }else{
//         console.log(data.toString());
//     }
// });