let mainDiv = document.getElementById("main");
let emptyDiv = document.getElementById("empty");
//console.log(mainDiv.childNodes);
//let childs = mainDiv.childNodes;
/*childs.forEach((ele) => {
  console.log(ele.textContent);
});
*/
//console.log(listul.parentNode);
//console.log(itemsLi.nextElementSibling);

let ulElement = document.createElement("ol");

ulElement.setAttribute("class", "myclass");
ulElement.setAttribute("id", "myid");

for (let i = 0; i < 4; i++) {
  ulElement.innerHTML += `<li> ${i}</li>`;
}
emptyDiv.appendChild(ulElement);

//pop box..
alert("you have been hacked");
confirm("This website need your location");
let a = prompt("enter your name");
console.log(a);
