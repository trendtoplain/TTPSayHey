const cowsay = require('cowsay');
function sayHelloRen() {
  console.log(cowsay.say({ text: "hey buddy!", f: "ren" }));
}
module.exports = sayHelloRen;
