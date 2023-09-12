//   q#1
// var userInput = +prompt("Enter a positive integer:");
// if (isNaN(userInput) || userInput <= 0) {
//     alert("Please enter a valid positive integer.");
//   } else {
//     // Calculate round-off, floor, and ceiling values
//     const roundValue = Math.round(userInput);
//     const floorValue = Math.floor(userInput);
//     const ceilValue = Math.ceil(userInput);
//     document.write("<h2>Number: " + userInput + "</h2>");
//     document.write("<h2>Round-off Value: " + roundValue + "</h2>");
//     document.write("<h2>Floor Value: " + floorValue + "</h2>");
//     document.write("<h2>Ceiling Value: " + ceilValue + "</h2>");
//   }

// //  q#2
// var userInput = +prompt("Enter a negative floating-point number:");
// if (isNaN(userInput) || userInput >= 0) {
//     alert("Please enter a valid negative floating-point number.");
//   } else {
//     // Calculate round-off, floor, and ceiling values
//     const roundValue = Math.round(userInput);
//     const floorValue = Math.floor(userInput);
//     const ceilValue = Math.ceil(userInput);

//     // Display the results in the browser
//     document.write("<h2>number: " + userInput + "</h2>");
//     document.write("<h2>Round-off Value: " + roundValue + "</h2>");
//     document.write("<h2>Floor Value: " + floorValue + "</h2>");
//     document.write("<h2>Ceiling Value: " + ceilValue + "</h2>");
//   }

// // q#3
// var userInput = +prompt("Enter a number:");
// if (isNaN(userInput)) {
//     alert("Please enter a valid number.");
// } else {
//     // Calculate the absolute value
//     const absoluteValue = Math.abs(userInput); 
//     alert(`The absolute value of ${userInput} is ${absoluteValue}`);
// }

// q#4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write(`<h1>Dice Roll Result: ${diceValue}</h1>`);


