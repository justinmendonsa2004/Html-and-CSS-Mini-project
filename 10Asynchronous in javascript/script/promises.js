console.log("justin");
//promises is asynchronous object..
let promise = new Promise((success, failure) => {
  let response_code = 200;
  if (response_code == 200) {
    setTimeout(() => {
      success("Everything is Okey");
    }, 2000);
  } else {
    setTimeout(() => {
      failure("something went wrong");
    }, 2000);
  }
});

promise.then(
  (success) => {
    console.log(success);
  },
  (failure) => {
    console.log(failure);
  },
);
