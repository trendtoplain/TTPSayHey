const cowsay = require('cowsay');
function sayHelloFox() {
  console.log(cowsay.say({ text: "hey buddy!", f: "fox" }));
}
module.exports = sayHelloFox;
