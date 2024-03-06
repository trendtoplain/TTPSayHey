const cowsay = require('cowsay');
function sayHelloOctopus() {
  console.log(cowsay.say({ text: "hey buddy!", f: "octopus" }));
}
module.exports = sayHelloOctopus;
