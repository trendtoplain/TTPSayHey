const cowsay = require('cowsay');
function sayHelloDolphin() {
  console.log(cowsay.say({ text: "hey buddy!", f: "dolphin" }));
}
module.exports = sayHelloDolphin;
