const cowsay = require('cowsay');
function sayHelloHedgehog() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hedgehog" }));
}
module.exports = sayHelloHedgehog;
