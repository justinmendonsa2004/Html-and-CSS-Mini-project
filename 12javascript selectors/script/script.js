console.log("justin");

let getId = document.getElementById("myid");
let getclass = document.getElementsByClassName("myclass");
let ele = document.getElementsByTagName("h1");
//console.log(getId.innerText);
//console.log(getclass);
//console.log(ele);
/*for (let i = 0; i < ele.length; i++) {
  console.log(ele[i].innerText);
}*/
for (let i = 0; i < getclass.length; i++) {
  console.log(getclass[i].innerText);
}
getId.innerText = "script justin";
