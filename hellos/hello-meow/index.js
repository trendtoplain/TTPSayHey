const cowsay = require('cowsay');
function sayHelloMeow() {
  console.log(cowsay.say({ text: "hey buddy!", f: "meow" }));
}
module.exports = sayHelloMeow;
