const cowsay = require('cowsay');
function sayHelloSquirrel() {
  console.log(cowsay.say({ text: "hey buddy!", f: "squirrel" }));
}
module.exports = sayHelloSquirrel;
