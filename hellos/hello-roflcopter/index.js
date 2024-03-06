const cowsay = require('cowsay');
function sayHelloRoflcopter() {
  console.log(cowsay.say({ text: "hey buddy!", f: "roflcopter" }));
}
module.exports = sayHelloRoflcopter;
