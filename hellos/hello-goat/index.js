const cowsay = require('cowsay');
function sayHelloGoat() {
  console.log(cowsay.say({ text: "hey buddy!", f: "goat" }));
}
module.exports = sayHelloGoat;
