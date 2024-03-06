const cowsay = require('cowsay');
function sayHelloLollerskates() {
  console.log(cowsay.say({ text: "hey buddy!", f: "lollerskates" }));
}
module.exports = sayHelloLollerskates;
