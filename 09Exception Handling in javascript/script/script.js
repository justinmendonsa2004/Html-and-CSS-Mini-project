console.log("Try and catch");

//Exception handling in javascript...
let num1 = 55;
let num2 = 0;

try {
  console.log(division(num1, num2)); //In try block check the code ,if any logical method is not good ,we can insert here for check the code.
} catch (e) {
  console.log(e); //In catch block ,Any Error is there it gives to user a popup error.
} finally {
  console.log("I am Thanos"); //In this block first two block is exicute or not .this block will be exicuted
}

function division(num1, num2) {
  if (num2 == 0) {
    throw new Error("can't divide by zero");
  } else {
    return console.log(num1 / num2);
  }
}
