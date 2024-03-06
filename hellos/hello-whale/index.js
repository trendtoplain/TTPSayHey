const cowsay = require('cowsay');
function sayHelloWhale() {
  console.log(cowsay.say({ text: "hey buddy!", f: "whale" }));
}
module.exports = sayHelloWhale;
