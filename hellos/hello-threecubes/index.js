const cowsay = require('cowsay');
function sayHelloThreecubes() {
  console.log(cowsay.say({ text: "hey buddy!", f: "threecubes" }));
}
module.exports = sayHelloThreecubes;
