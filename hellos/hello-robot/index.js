const cowsay = require('cowsay');
function sayHelloRobot() {
  console.log(cowsay.say({ text: "hey buddy!", f: "robot" }));
}
module.exports = sayHelloRobot;
