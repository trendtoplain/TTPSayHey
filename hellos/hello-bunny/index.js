const cowsay = require('cowsay');
function sayHelloBunny() {
  console.log(cowsay.say({ text: "hey buddy!", f: "bunny" }));
}
module.exports = sayHelloBunny;
