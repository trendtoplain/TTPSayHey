const cowsay = require('cowsay');
function sayHelloEyes() {
  console.log(cowsay.say({ text: "hey buddy!", f: "eyes" }));
}
module.exports = sayHelloEyes;
