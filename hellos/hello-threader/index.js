const cowsay = require('cowsay');
function sayHelloThreader() {
  console.log(cowsay.say({ text: "hey buddy!", f: "threader" }));
}
module.exports = sayHelloThreader;
