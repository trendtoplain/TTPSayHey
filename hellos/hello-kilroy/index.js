const cowsay = require('cowsay');
function sayHelloKilroy() {
  console.log(cowsay.say({ text: "hey buddy!", f: "kilroy" }));
}
module.exports = sayHelloKilroy;
