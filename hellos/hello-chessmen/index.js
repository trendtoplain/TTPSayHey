const cowsay = require('cowsay');
function sayHelloChessmen() {
  console.log(cowsay.say({ text: "hey buddy!", f: "chessmen" }));
}
module.exports = sayHelloChessmen;
