/*const path = require('node:path'); 
const os = require('node:os');
const fs = require('node:fs'); */

// event system module.

const School= require('./eventRaise');

//register a listenner for bellRing event

const school = new School();
school.on('bellRing', ({period, text })=>{
    console.log(`we need to run! because ${period} ${text}`);
});

school.startPeriod();
// raise an event

// setTimeout(() => {
//     emitter.emit('bellRing', {
//         period : 'first',
//         text : 'period ended.'
//     });
// }, 5000);


// path module

/* const myPath = 'D:/Users/joy chowdhury/ MyJavaScriptWorkfiles/node.js/index.js'; */

//console

/* console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath)); */


//os module 

/*
 console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());
 */

// file system module 

// Read files
// Create files
// Update files
// Delete files
// Rename files

/*
fs.writeFileSync('myFile.txt', "Hello Programmers"); 
*/ //write

// fs.appendFileSync('myFile.txt', " How are you !"); //synchronous 
//append

//asynchronous way 

/* 
fs.appendFile('myFile.txt', " how are you !", (err)=>{
    if(err){
        throw err;
    }else{
        console.log('saved!');
    }
})
*/


// const data = fs.readFileSync('myFile.txt');
// console.log(data.toString()); //read 
// synchronous way


//asynchronous way

// fs.readFile('myFile.txt', (err,data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString());
//     }
// })

// console.log('Hello'); 
// prove 












