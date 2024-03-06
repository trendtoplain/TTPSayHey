const cowsay = require('cowsay');
function sayHelloCower() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cower" }));
}
module.exports = sayHelloCower;
