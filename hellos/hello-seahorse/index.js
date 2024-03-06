const cowsay = require('cowsay');
function sayHelloSeahorse() {
  console.log(cowsay.say({ text: "hey buddy!", f: "seahorse" }));
}
module.exports = sayHelloSeahorse;
