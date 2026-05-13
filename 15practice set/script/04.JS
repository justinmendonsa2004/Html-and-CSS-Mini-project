console.log("Problem -09");

let arr = [3, 4, 5, 6, 1, 9, 0];
let key = 4;
let isPresent = false;

arr.forEach((element) => {
  if (element == key) {
    isPresent = true;
  }
});

if (isPresent) {
  console.log("Elements is Present");
} else {
  console.log("Element is not present");
}
