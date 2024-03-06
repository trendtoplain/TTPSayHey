const cowsay = require('cowsay');
function sayHelloRadio() {
  console.log(cowsay.say({ text: "hey buddy!", f: "radio" }));
}
module.exports = sayHelloRadio;
