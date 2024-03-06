const cowsay = require('cowsay');
function sayHelloMoofasa() {
  console.log(cowsay.say({ text: "hey buddy!", f: "moofasa" }));
}
module.exports = sayHelloMoofasa;
