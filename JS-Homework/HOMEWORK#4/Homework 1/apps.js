console.log("It is live!");

function tellStory(storyArguments) {
    let [name, mood, activity] = storyArguments;

    return `This is ${name}. ${name} is a nice person. Today they he is ${mood}. He is ${activity} all day. The end.`;
}

let myStory = tellStory(["Jason", "tired", "exercising"]);
console.log(myStory);