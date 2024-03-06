const cowsay = require('cowsay');
function sayHelloSachiko() {
  console.log(cowsay.say({ text: "hey buddy!", f: "sachiko" }));
}
module.exports = sayHelloSachiko;
