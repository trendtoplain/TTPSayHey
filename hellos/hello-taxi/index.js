const cowsay = require('cowsay');
function sayHelloTaxi() {
  console.log(cowsay.say({ text: "hey buddy!", f: "taxi" }));
}
module.exports = sayHelloTaxi;
