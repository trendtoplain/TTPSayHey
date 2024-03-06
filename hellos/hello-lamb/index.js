const cowsay = require('cowsay');
function sayHelloLamb() {
  console.log(cowsay.say({ text: "hey buddy!", f: "lamb" }));
}
module.exports = sayHelloLamb;
