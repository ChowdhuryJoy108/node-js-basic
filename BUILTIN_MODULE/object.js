
const School = require('./class');

const school = new School();

school.on('bellRing', ({period,text})=>{
    console.log(`we need to run because ${period} ${text}`)
}) //fire an event

school.startPeriod();


