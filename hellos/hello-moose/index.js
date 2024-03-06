const cowsay = require('cowsay');
function sayHelloMoose() {
  console.log(cowsay.say({ text: "hey buddy!", f: "moose" }));
}
module.exports = sayHelloMoose;
