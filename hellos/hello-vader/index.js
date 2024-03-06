const cowsay = require('cowsay');
function sayHelloVader() {
  console.log(cowsay.say({ text: "hey buddy!", f: "vader" }));
}
module.exports = sayHelloVader;
