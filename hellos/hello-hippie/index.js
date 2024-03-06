const cowsay = require('cowsay');
function sayHelloHippie() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hippie" }));
}
module.exports = sayHelloHippie;
