console.log("justin");

//Array..
let subject = ["SE", "AI", "DS", "Project"];
let vajaeed = [89, 90, 86, 149];
let vijay = [89, 88, 87, 149];
let Arun = [80, 70, 87, 149];

//constrocter way...
let shashi = new Array(80, 70, 86, 149);

let size = shashi.length;
console.log(size);
/*
for (let i = 0; i < size; i++) {
  console.log(subject[i], ":", shashi[i]);
}

for (let i = 0; i < size; i++) {
  console.log(subject[i], ":", vajaeed[i]);
}
*/
//for each loop...
vajaeed.forEach((item, index) => {
  console.log(subject[index], ":", item);
});

let fruits = ["apple", "banana", "tomato"];
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("orange");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("apple");
console.log(fruits);
