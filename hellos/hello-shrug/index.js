const cowsay = require('cowsay');
function sayHelloShrug() {
  console.log(cowsay.say({ text: "hey buddy!", f: "shrug" }));
}
module.exports = sayHelloShrug;
