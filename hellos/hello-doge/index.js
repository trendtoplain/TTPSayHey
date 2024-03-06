const cowsay = require('cowsay');
function sayHelloDoge() {
  console.log(cowsay.say({ text: "hey buddy!", f: "doge" }));
}
module.exports = sayHelloDoge;
