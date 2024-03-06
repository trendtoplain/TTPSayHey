const cowsay = require('cowsay');
function sayHelloStegosaurus() {
  console.log(cowsay.say({ text: "hey buddy!", f: "stegosaurus" }));
}
module.exports = sayHelloStegosaurus;
