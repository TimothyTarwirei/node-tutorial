const names = require('./names');

sayHi('Timothy');
sayHi('Makanaka');
sayHi('Anashe');

console.log(names);
const sayHi = (name)=>{
  console.log(`Hello there ${name}`)
  };


  module.exports = {sayHi};