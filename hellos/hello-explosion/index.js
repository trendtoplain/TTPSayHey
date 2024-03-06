const cowsay = require('cowsay');
function sayHelloExplosion() {
  console.log(cowsay.say({ text: "hey buddy!", f: "explosion" }));
}
module.exports = sayHelloExplosion;
