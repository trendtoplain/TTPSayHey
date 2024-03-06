const cowsay = require('cowsay');
function sayHelloFire() {
  console.log(cowsay.say({ text: "hey buddy!", f: "fire" }));
}
module.exports = sayHelloFire;
