const cowsay = require('cowsay');
function sayHelloCake() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cake" }));
}
module.exports = sayHelloCake;
