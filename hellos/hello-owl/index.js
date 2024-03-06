const cowsay = require('cowsay');
function sayHelloOwl() {
  console.log(cowsay.say({ text: "hey buddy!", f: "owl" }));
}
module.exports = sayHelloOwl;
