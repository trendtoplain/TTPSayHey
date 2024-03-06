const cowsay = require('cowsay');
function sayHelloChito() {
  console.log(cowsay.say({ text: "hey buddy!", f: "chito" }));
}
module.exports = sayHelloChito;
