const cowsay = require('cowsay');
function sayHelloSquid() {
  console.log(cowsay.say({ text: "hey buddy!", f: "squid" }));
}
module.exports = sayHelloSquid;
