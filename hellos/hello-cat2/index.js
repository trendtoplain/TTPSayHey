const cowsay = require('cowsay');
function sayHelloCat2() {
  console.log(cowsay.say({ text: "hey buddy!", f: "cat2" }));
}
module.exports = sayHelloCat2;
