const cowsay = require('cowsay');
function sayHelloHellokitty() {
  console.log(cowsay.say({ text: "hey buddy!", f: "hellokitty" }));
}
module.exports = sayHelloHellokitty;
