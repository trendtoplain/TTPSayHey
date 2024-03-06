const cowsay = require('cowsay');
function sayHelloSmall() {
  console.log(cowsay.say({ text: "hey buddy!", f: "small" }));
}
module.exports = sayHelloSmall;
