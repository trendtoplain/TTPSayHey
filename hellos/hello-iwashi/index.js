const cowsay = require('cowsay');
function sayHelloIwashi() {
  console.log(cowsay.say({ text: "hey buddy!", f: "iwashi" }));
}
module.exports = sayHelloIwashi;
