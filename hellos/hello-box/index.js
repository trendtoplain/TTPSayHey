const cowsay = require('cowsay');
function sayHelloBox() {
  console.log(cowsay.say({ text: "hey buddy!", f: "box" }));
}
module.exports = sayHelloBox;
