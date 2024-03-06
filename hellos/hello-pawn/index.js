const cowsay = require('cowsay');
function sayHelloPawn() {
  console.log(cowsay.say({ text: "hey buddy!", f: "pawn" }));
}
module.exports = sayHelloPawn;
