const cowsay = require('cowsay');
function sayHelloKitten() {
  console.log(cowsay.say({ text: "hey buddy!", f: "kitten" }));
}
module.exports = sayHelloKitten;
