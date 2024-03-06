const cowsay = require('cowsay');
function sayHelloKosh() {
  console.log(cowsay.say({ text: "hey buddy!", f: "kosh" }));
}
module.exports = sayHelloKosh;
