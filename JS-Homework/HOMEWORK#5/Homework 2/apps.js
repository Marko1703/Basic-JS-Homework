console.log("It's working");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberList = document.querySelector(".number-list");
const sumParagraph = document.querySelector(".sum");
const equationParagraph = document.querySelector(".equation");

numbers.forEach(number => { // Loops through each number in the array
    const listItem = document.createElement("li");
    listItem.textContent = number;
    numberList.appendChild(listItem); // Appends the list item to the unordered list, creating the visual list
});

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); // Calculates the sum of the numbers using the reduce method
sumParagraph.textContent = "The sum of the number is: " + sum;

const mathNum = [2, "+", 4, "+", 5, "=", 11];
equationParagraph.textContent = mathNum.join(" ");