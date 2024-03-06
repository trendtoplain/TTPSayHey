const cowsay = require('cowsay');
function sayHelloOkazu() {
  console.log(cowsay.say({ text: "hey buddy!", f: "okazu" }));
}
module.exports = sayHelloOkazu;
