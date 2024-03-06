const cowsay = require('cowsay');
function sayHelloGlados() {
  console.log(cowsay.say({ text: "hey buddy!", f: "glados" }));
}
module.exports = sayHelloGlados;
