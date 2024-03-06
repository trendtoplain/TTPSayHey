const cowsay = require('cowsay');
function sayHelloCube() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cube" }));
}
module.exports = sayHelloCube;
