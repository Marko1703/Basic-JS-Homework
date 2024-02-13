console.log("It is live");

function joinStrings(arr) {
  
    let joined = arr.join(" ");
  
    return joined; 
  
  }
  
  let myArray = ["Hello", "there", "students", "of", "SEDC!"];
  
  let result = joinStrings(myArray); 

  console.log(result);