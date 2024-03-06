const cowsay = require('cowsay');
function sayHelloMinotaur() {
  console.log(cowsay.say({ text: "hey buddy!", f: "minotaur" }));
}
module.exports = sayHelloMinotaur;
