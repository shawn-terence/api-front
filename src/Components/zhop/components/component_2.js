function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), delay);
    };
}

const logMessage = debounce((msg) => console.log(msg), 1000);

logMessage("This message will be logged after 1 second of inactivity.");
console.log("Update: Improved functionality for JavaScript debounce.");

console.log("Update: Improved functionality for JavaScript debounce.");

console.log("Update: Improved functionality for JavaScript debounce.");

console.log("Update: Improved functionality for JavaScript debounce.");

console.log("Update: Improved functionality for JavaScript debounce.");
