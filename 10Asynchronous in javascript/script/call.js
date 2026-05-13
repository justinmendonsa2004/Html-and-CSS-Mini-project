console.log("script callback");

// Callback function
function one(n) {
  return n + 1;
}

function two(num1, callback) {
  return num1 + callback(num1);
}

function output(value) {
  let sum = two(value, one);

  console.log(sum);
}

setTimeout(() => {
  output(5);
}, 5000);

console.log("I am last");
