const cowsay = require('cowsay');
function sayHelloWizard() {
  console.log(cowsay.say({ text: "hey buddy!", f: "wizard" }));
}
module.exports = sayHelloWizard;
