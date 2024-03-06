const cowsay = require('cowsay');
function sayHelloLobster() {
  console.log(cowsay.say({ text: "hey buddy!", f: "lobster" }));
}
module.exports = sayHelloLobster;
