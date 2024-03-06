const cowsay = require('cowsay');
function sayHelloSnoopysleep() {
  console.log(cowsay.say({ text: "hey buddy!", f: "snoopysleep" }));
}
module.exports = sayHelloSnoopysleep;
