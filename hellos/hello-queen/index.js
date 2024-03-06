const cowsay = require('cowsay');
function sayHelloQueen() {
  console.log(cowsay.say({ text: "hey buddy!", f: "queen" }));
}
module.exports = sayHelloQueen;
