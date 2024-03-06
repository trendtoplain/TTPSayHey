const cowsay = require('cowsay');
function sayHelloGhost() {
  console.log(cowsay.say({ text: "hey buddy!", f: "ghost" }));
}
module.exports = sayHelloGhost;
