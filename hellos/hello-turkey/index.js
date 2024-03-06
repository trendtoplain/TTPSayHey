const cowsay = require('cowsay');
function sayHelloTurkey() {
  console.log(cowsay.say({ text: "hey buddy!", f: "turkey" }));
}
module.exports = sayHelloTurkey;
