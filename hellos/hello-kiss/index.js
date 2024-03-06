const cowsay = require('cowsay');
function sayHelloKiss() {
  console.log(cowsay.say({ text: "hey buddy!", f: "kiss" }));
}
module.exports = sayHelloKiss;
