// Async Await

// Run a calculation 5 million times only after all synchronous code is run
const millionLoopsImproved = async () => {

  await Promise.resolve().then(_ => {
    let i = 0;
    while (i < 5000000) {
      i++;
    }

    return "millionLoopsImproved done!";
  });
}

log("this first");

millionLoopsImproved().then(log);

log("this then");

// With millionLoopsImproved, the function only runs after all synchronous code has run
// This is because the code is run INSIDE of a Promise's resolve