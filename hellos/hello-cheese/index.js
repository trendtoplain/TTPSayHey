const cowsay = require('cowsay');
function sayHelloCheese() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cheese" }));
}
module.exports = sayHelloCheese;
