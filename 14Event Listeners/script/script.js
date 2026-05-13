let btn = document.getElementById("myBtn");
let div = document.getElementById("boxDiv");
let input = document.getElementById("myinput");

btn.addEventListener("click", () => {
  // btn.setAttribute("class", "click");
  btn.classList.toggle("click");
});

div.addEventListener("mousedown", () => {
  div.innerHTML = "mouse cliked";
});

div.addEventListener("mouseover", () => {
  div.innerHTML = "mouse hover";
});
div.addEventListener("mouseout", () => {
  div.innerHTML = "mouse out";
});
input.addEventListener("keypress", (key) => {
  div.innerHTML = `${key.key} is pressed`;
});

list.addEventListener("click", (ele) => {
  if ((ele.target.tagname = "li")) {
    let name = ele.target.getAttribute("name");
    //console.log(ele.target.getAttribute("name"));
    switch (name) {
      case "Home":
        div.innerHTML = `clicked on Home`;
        break;
      case "About":
        div.innerHTML = `clicked on About`;
        break;
      case "login":
        div.innerHTML = `clicked on login`;
        break;
      case "contact":
        div.innerHTML = `clicked on contact`;
        break;
    }
  }
});
