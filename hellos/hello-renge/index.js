const cowsay = require('cowsay');
function sayHelloRenge() {
  console.log(cowsay.say({ text: "hey buddy!", f: "renge" }));
}
module.exports = sayHelloRenge;
