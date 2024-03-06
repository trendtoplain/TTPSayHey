const cowsay = require('cowsay');
function sayHelloTableflip() {
  console.log(cowsay.say({ text: "hey buddy!", f: "tableflip" }));
}
module.exports = sayHelloTableflip;
