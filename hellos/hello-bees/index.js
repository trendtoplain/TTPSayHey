const cowsay = require('cowsay');
function sayHelloBees() {
  console.log(cowsay.say({ text: "hey buddy!", f: "bees" }));
}
module.exports = sayHelloBees;
