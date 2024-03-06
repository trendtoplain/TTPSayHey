const cowsay = require('cowsay');
function sayHelloBiohazard() {
  console.log(cowsay.say({ text: "hey buddy!", f: "biohazard" }));
}
module.exports = sayHelloBiohazard;
