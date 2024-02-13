console.log("It's working!");

const title = prompt("Enter book title:"); 
const author = prompt("Enter author name:");
const readStatus = confirm("Have you read this book?");

const book = {
    title,
    author,
    readingStatus: readStatus,
    getStatus() {
      if (this.readingStatus) {
        return `Already read ${this.title} by ${this.author}.`; 
      } else {
        return `You still need to read ${this.title} by ${this.author}.`;
      }
    }
  }
  
  console.log(book.getStatus());
  console.log(book);