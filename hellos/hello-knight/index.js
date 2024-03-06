const cowsay = require('cowsay');
function sayHelloKnight() {
  console.log(cowsay.say({ text: "hey buddy!", f: "knight" }));
}
module.exports = sayHelloKnight;
