const cowsay = require('cowsay');
function sayHelloRook() {
  console.log(cowsay.say({ text: "hey buddy!", f: "rook" }));
}
module.exports = sayHelloRook;
