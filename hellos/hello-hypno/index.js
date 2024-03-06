const cowsay = require('cowsay');
function sayHelloHypno() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hypno" }));
}
module.exports = sayHelloHypno;
