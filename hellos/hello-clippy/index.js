const cowsay = require('cowsay');
function sayHelloClippy() {
  console.log(cowsay.say({ text: "hey buddy!", f: "clippy" }));
}
module.exports = sayHelloClippy;
