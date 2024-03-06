const cowsay = require('cowsay');
function sayHelloShikato() {
  console.log(cowsay.say({ text: "hey buddy!", f: "shikato" }));
}
module.exports = sayHelloShikato;
