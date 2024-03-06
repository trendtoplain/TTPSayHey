const cowsay = require('cowsay');
function sayHelloArmadillo() {
  console.log(cowsay.say({ text: "hey buddy!", f: "armadillo" }));
}
module.exports = sayHelloArmadillo;
