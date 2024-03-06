const cowsay = require('cowsay');
function sayHelloWww() {
  console.log(cowsay.say({ text: "hey buddy!", f: "www" }));
}
module.exports = sayHelloWww;
