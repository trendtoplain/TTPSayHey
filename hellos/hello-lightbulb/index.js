const cowsay = require('cowsay');
function sayHelloLightbulb() {
  console.log(cowsay.say({ text: "hey buddy!", f: "lightbulb" }));
}
module.exports = sayHelloLightbulb;
