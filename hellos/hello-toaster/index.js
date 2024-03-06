const cowsay = require('cowsay');
function sayHelloToaster() {
  console.log(cowsay.say({ text: "hey buddy!", f: "toaster" }));
}
module.exports = sayHelloToaster;
