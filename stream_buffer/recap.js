
const fs = require('fs');

// const writeFile = fs.writeFileSync('joy.txt', 'hey there! I m joy here!');

// const appendTxt = fs.appendFileSync('joy.txt', ' learning NODE JS, wish me luck!');

// const readFile = fs.readFileSync('joy.txt');
// console.log(readFile.toString());


//async  [recommended]
const txt = 'still new to node js.';
const txt2 = ' but soon will learn it by the grace of sri krishna!';

fs.writeFile('joy.txt', `${txt}`, (err)=>{
    if(err){
        throw err;
    }else{
        console.log('Saved!');
    }
})

fs.appendFile('joy.txt', `${txt2}`, (err)=>{
    if(err) throw err;
    else console.log('appended');
})


fs.readFile('joy.txt', (err,data)=>{
    if(err) throw err;
    else console.log(data.toString());
})


//sync way 

// const readStream = fs.createReadStream(`${__dirname}/bigdata2.txt`);

// readStream.on('data', (chunk)=>{
//     console.log(chunk.toString());
// })

// const writeStrem = fs.createWriteStream(`${__dirname}/result1.txt`);

// readStream.pipe(writeStrem);

// readStream.on('data', (res)=>{
//     writeStrem.write(res);
// })

