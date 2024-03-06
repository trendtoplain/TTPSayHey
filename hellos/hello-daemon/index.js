const cowsay = require('cowsay');
function sayHelloDaemon() {
  console.log(cowsay.say({ text: "hey buddy!", f: "daemon" }));
}
module.exports = sayHelloDaemon;
