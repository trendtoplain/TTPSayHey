const cowsay = require('cowsay');
function sayHelloFence() {
  console.log(cowsay.say({ text: "hey buddy!", f: "fence" }));
}
module.exports = sayHelloFence;
