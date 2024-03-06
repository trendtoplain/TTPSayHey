const cowsay = require('cowsay');
function sayHelloWood() {
  console.log(cowsay.say({ text: "hey buddy!", f: "wood" }));
}
module.exports = sayHelloWood;
