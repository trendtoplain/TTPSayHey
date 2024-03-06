const cowsay = require('cowsay');
function sayHelloKing() {
  console.log(cowsay.say({ text: "hey buddy!", f: "king" }));
}
module.exports = sayHelloKing;
