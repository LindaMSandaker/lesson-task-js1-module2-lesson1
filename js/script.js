// Question 1

function receivingFunction(arg) {
    console.log("The argument is a " + typeof arg);
}

// Only to check the function:
receivingFunction(true);
receivingFunction(6);
receivingFunction("Word");
receivingFunction(null);
receivingFunction({});
receivingFunction([]);


function callbackFunction() {
    console.log("I am a callback function");
}
callbackFunction();

receivingFunction(callbackFunction);

// ********


// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

prizes.forEach(function (item, index) {
    console.log("Prize " + index + ": " + item);
    console.log(`Prize: ${item}`);
    console.log(index);
});

// *********


// Question 3

let changeTime = 5000;

setTimeout(function () {
    console.log("I waited 5 seconds before executing");
}, changeTime);

// *********


// Question 4

let count = 0;

const interval = setInterval(function () {
    count++;
    if (count === 4) {
        clearInterval(interval);
    }
    console.log(count);
}, 1500);

// ********