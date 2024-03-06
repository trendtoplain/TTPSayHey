const cowsay = require('cowsay');
function sayHelloBishop() {
  console.log(cowsay.say({ text: "hey buddy!", f: "bishop" }));
}
module.exports = sayHelloBishop;
