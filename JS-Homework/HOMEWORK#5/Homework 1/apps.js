console.log("It is working!");

const mainHeading = document.querySelector("#mainHeading");
mainHeading.textContent = "The first DOM Homework";

const paragraph = document.querySelector(".paragraph");
paragraph.textContent = "This homework is not that hard!";

const secondParagraph = document.querySelector(".paragraph.second");
secondParagraph.textContent = "Show me wath you learned";

const text = document.querySelector("text");
text.textContent = "If anything is unclear, just ask use some questions";

const headings = document.getElementsByTagName('h1');
const secondHeading = headings[1];
secondHeading.textContent = "And now it is!";

const heading3 = document.querySelector("h3");
heading3.textContent = "Here it is!";