const EventEmitter  = require('node:events');

class School extends EventEmitter{
    startPeriod(){
        console.log('class Started!');
    
        //raise event when bell rings
        //raise  an event
    
        setTimeout(() => {
            this.emit('bellRing', {
                period : 'first',
                text : 'period ended.'
            });
        }, 5000);
    }
    
}
module.exports = School; // exports the whole class.