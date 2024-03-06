const cowsay = require('cowsay');
function sayHelloMule() {
  console.log(cowsay.say({ text: "hey buddy!", f: "mule" }));
}
module.exports = sayHelloMule;
