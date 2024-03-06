const cowsay = require('cowsay');
function sayHelloHand() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hand" }));
}
module.exports = sayHelloHand;
