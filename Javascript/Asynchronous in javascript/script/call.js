console.log("script callback");
/*
function one(n) {
  return n + 1;
}

function two(num1, one) {
  return num1 + one(num1);
}

let sum = two(6, one);

console.log(sum);
*/

setTimeout(() => {
  console.log("I am setTimeout");
}, 1000);

console.log("I am last");
