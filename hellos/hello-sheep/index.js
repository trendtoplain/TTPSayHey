const cowsay = require('cowsay');
function sayHelloSheep() {
  console.log(cowsay.say({ text: "hey buddy!", f: "sheep" }));
}
module.exports = sayHelloSheep;
