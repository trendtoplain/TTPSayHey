const cowsay = require('cowsay');
function sayHelloCharlie() {
  console.log(cowsay.say({ text: "hey buddy!", f: "charlie" }));
}
module.exports = sayHelloCharlie;
