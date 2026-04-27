console.log("justin");

let promise = new Promise((success, failure) => {
  let response_code = 200;
  if (response_code == 200) {
    setTimeout(() => {
      success("Everything is Okey");
    }, 9000);
  } else {
    setTimeout(() => {
      failure("something went wrong");
    }, 9000);
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
