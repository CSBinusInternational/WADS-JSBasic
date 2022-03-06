// Promises

// Callback function to log resolve and elapsed time
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

// Run a calculation 5 million times, returns a promise
const millionLoops = () => {

  return new Promise((resolve, reject) => {

    let i = 0;
    while (i < 5000000) {
      i++;
    };

    resolve("millionLoops is done!");
  })
}

log("something first");

millionLoops().then(log);

log("something then");

// Even though millionLoops is in between the two console.logs, the process is done asynchronously
// However, the millionLoops function blocks the main thread when written this way