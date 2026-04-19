console.log("subscribe");
/*
function displayName(name, age) {
  console.log(name, age);
}

displayName("vajeed", 24);
displayName("shashi", 22);
displayName("Rahul", 21);
*/
/*
function displayName(name, age) {
  console.log(name, age);
  if (age > 18) {
    return " Elegeble for voting";
  } else {
    return "Go watch Pogo";
  }
}
let vajeed = displayName("vajeed", 24);
let shashi = displayName("shashi", 22);
let Rahul = displayName("Rahul", 23);

console.log(vajeed);
console.log(shashi);
console.log(Rahul);
*/

//recursive Function....

//The function calls its self inside the function is called recursive function.

function returnOne(one) {
  if (one == 1) {
    return 1;
  } else {
    return returnOne(one - 1);
  }
}

let a = returnOne(10);
console.log(a);

//problomes
//factorial problems

function fact(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}

let A = fact(8);
console.log(A);
