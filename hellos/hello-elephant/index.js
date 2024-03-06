const cowsay = require('cowsay');
function sayHelloElephant() {
  console.log(cowsay.say({ text: "hey buddy!", f: "elephant" }));
}
module.exports = sayHelloElephant;
