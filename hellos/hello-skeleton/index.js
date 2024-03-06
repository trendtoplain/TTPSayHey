const cowsay = require('cowsay');
function sayHelloSkeleton() {
  console.log(cowsay.say({ text: "hey buddy!", f: "skeleton" }));
}
module.exports = sayHelloSkeleton;
