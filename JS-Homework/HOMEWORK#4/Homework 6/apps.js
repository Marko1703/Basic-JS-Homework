console.log("It is live");

function fullNames(firstNames, lastNames) {
    let full = [];
    for (let i = 0; i < firstNames.length; i++) {
        full.push(`${i+1}. ${firstNames[i]} ${lastNames[i]}`);
    }
    return full;
}

let first = ["Bob", "Jill"];
let last = ["Greogory", "Wurtz"];

let full = fullNames(first, last);

console.log(full);