const cowsay = require('cowsay');
function sayHelloTortoise() {
  console.log(cowsay.say({ text: "hey buddy!", f: "tortoise" }));
}
module.exports = sayHelloTortoise;
