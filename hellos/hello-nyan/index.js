const cowsay = require('cowsay');
function sayHelloNyan() {
  console.log(cowsay.say({ text: "hey buddy!", f: "nyan" }));
}
module.exports = sayHelloNyan;
