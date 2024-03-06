const cowsay = require('cowsay');
function sayHelloSnoopy() {
  console.log(cowsay.say({ text: "hey buddy!", f: "snoopy" }));
}
module.exports = sayHelloSnoopy;
