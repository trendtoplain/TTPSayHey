const cowsay = require('cowsay');
function sayHelloJellyfish() {
  console.log(cowsay.say({ text: "hey buddy!", f: "jellyfish" }));
}
module.exports = sayHelloJellyfish;
