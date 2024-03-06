const cowsay = require('cowsay');
function sayHelloTelebears() {
  console.log(cowsay.say({ text: "hey buddy!", f: "telebears" }));
}
module.exports = sayHelloTelebears;
