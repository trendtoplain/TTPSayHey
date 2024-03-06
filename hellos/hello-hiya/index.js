const cowsay = require('cowsay');
function sayHelloHiya() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hiya" }));
}
module.exports = sayHelloHiya;
