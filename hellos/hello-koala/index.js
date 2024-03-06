const cowsay = require('cowsay');
function sayHelloKoala() {
  console.log(cowsay.say({ text: "hey buddy!", f: "koala" }));
}
module.exports = sayHelloKoala;
