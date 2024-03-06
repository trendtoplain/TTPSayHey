const cowsay = require('cowsay');
function sayHelloTurtle() {
  console.log(cowsay.say({ text: "hey buddy!", f: "turtle" }));
}
module.exports = sayHelloTurtle;
