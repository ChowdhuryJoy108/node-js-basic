const EventEmitter = require('node:events');

class School extends EventEmitter{

    startPeriod (){
           console.log('Class Started!');

           setTimeout(()=>{

            // execution of an event.
            this.emit('bellRing', {
                period: 'First',
                text: ' Period Ended!'
            })

           },5000)
    }

}

module.exports = School;

