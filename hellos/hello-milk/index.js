const cowsay = require('cowsay');
function sayHelloMilk() {
  console.log(cowsay.say({ text: "hey buddy!", f: "milk" }));
}
module.exports = sayHelloMilk;
