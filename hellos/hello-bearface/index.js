const cowsay = require('cowsay');
function sayHelloBearface() {
  console.log(cowsay.say({ text: "hey buddy!", f: "bearface" }));
}
module.exports = sayHelloBearface;
