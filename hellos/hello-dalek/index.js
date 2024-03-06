const cowsay = require('cowsay');
function sayHelloDalek() {
  console.log(cowsay.say({ text: "hey buddy!", f: "dalek" }));
}
module.exports = sayHelloDalek;
