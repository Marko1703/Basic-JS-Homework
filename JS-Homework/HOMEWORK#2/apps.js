let year = prompt("Enter your birth year");

let zodiac;
if ((year - 4) % 12 === 0) {
    zodiac = "Rat";
}else if ((year - 4) % 12 === 1) {
    zodiac = "Ox";
}else if ((year - 4) % 12 === 2) {
    zodiac = "Tiger";
}else if ((year - 4) % 12 === 3) {
    zodiac = "Rabbit";
}else if ((year - 4) % 12 === 4) {
    zodiac = "Dragon";
}else if ((year - 4) % 12 === 5) {
    zodiac = "Snake";
}else if ((year - 4) % 12 === 6) {
    zodiac = "Horse";
}else if ((year - 4) % 12 === 7) {
    zodiac = "Goat";
}else if ((year - 4) % 12 === 8) {
    zodiac = "Monkey";
}else if ((year - 4) % 12 === 9) {
    zodiac = "Rooster";
}else if ((year - 4) % 12 === 10) {
    zodiac = "Dog";
}else if ((year - 4) % 12 === 11) {
    zodiac = "Pig";
};

console.log("The chinese zodiac sign for " + year + " is: " + zodiac);