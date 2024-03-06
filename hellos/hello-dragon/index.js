const cowsay = require('cowsay');
function sayHelloDragon() {
  console.log(cowsay.say({ text: "hey buddy!", f: "dragon" }));
}
module.exports = sayHelloDragon;
