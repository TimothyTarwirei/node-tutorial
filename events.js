const EventEmitter = require('events');
const celebrity = new EventEmitter();

//subscribe to celebrity
celebrity.on('race win', function (){
  console.log('congradulations! You are the best!');
});

celebrity.on('race lost',()=>{
  console.log('I could have done better!!!!!!!!!')
})

celebrity.emit('race win');
celebrity.emit('race lost');



