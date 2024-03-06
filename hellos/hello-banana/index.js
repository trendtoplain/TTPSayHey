const cowsay = require('cowsay');
function sayHelloBanana() {
  console.log(cowsay.say({ text: "hey buddy!", f: "banana" }));
}
module.exports = sayHelloBanana;
