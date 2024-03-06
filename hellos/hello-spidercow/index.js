const cowsay = require('cowsay');
function sayHelloSpidercow() {
  console.log(cowsay.say({ text: "hey buddy!", f: "spidercow" }));
}
module.exports = sayHelloSpidercow;
