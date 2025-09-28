console.log("Start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First");
  }, 1000);
});

myPromise
  .then((res) => {
    console.log(res);
    return "Second";
  })
  .then((res) => {
    console.log(res);
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.log("Caught:", err.message);
    return "Recovered";
  })
  .then((res) => {
    console.log("After catch:", res);
  });

console.log("End");
