const cowsay = require('cowsay');
function sayHelloTux() {
  console.log(cowsay.say({ text: "hey buddy!", f: "tux" }));
}
module.exports = sayHelloTux;
