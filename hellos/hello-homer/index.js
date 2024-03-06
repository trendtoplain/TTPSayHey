const cowsay = require('cowsay');
function sayHelloHomer() {
  console.log(cowsay.say({ text: "hey buddy!", f: "homer" }));
}
module.exports = sayHelloHomer;
