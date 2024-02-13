console.log("It's working!");

const animal = {
    name: "Albert",
    kind: "pug",
    speak: function(message) {
        console.log(`This ${this.name} the ${this.kind} says: ${message}`);
    }
}

const name = prompt("Enter the animal's name");
const kind = prompt("Enter the animal's kind");
const message = prompt("Enter a message")

animal.speak("Hey bro!!!");

console.log(animal);