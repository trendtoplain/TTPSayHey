const cowsay = require('cowsay');
function sayHelloCat() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cat" }));
}
module.exports = sayHelloCat;
