console.log("Starting program...");

// const timeoutId = setTimeout(() => {
//     console.log("3 second has passed since program started");
// }, 3000);

// clearTimeout(timeoutId);

let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Has passed ${seconds} seconds`);
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log("You have exceeded the maximum number of seconds")
    }
}, 3000);