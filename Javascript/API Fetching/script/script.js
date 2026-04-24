/*console.log("share the video");
//get method using async and wait....
let url = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
  let data = await fetch(url);
  return data;
}

getData(url)
  .then((prom) => {
    return prom.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log("Smothing went wrong");
  });
*/

let url = "https://jsonplaceholder.typicode.com/posts";

let objAPI = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
/*
async function getData(url, obj) {
  let data = await fetch(url, obj);
  return data;
}

getData(url, objAPI)
  .then((prom) => {
    return prom.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log("Smothing went wrong");
  });
*/

let a = fetch(url, objAPI);

a.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});
