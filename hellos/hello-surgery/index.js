const cowsay = require('cowsay');
function sayHelloSurgery() {
  console.log(cowsay.say({ text: "hey buddy!", f: "surgery" }));
}
module.exports = sayHelloSurgery;
