console.log("It is live!");

function maxMinSum(arr) {
    let max = -Infinity;
    let min = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        if (arr[i] > max) {
          max = arr[i];  
        }
        if (arr[i] < min) {
          min = arr[i];
        }
      }
    }
    
    return {
      max: max,
      min: min, 
      sum: max + min
    }; 
  }
  
  let array = [3, 5, "cat", 6, 8, 11]; 
  console.log(maxMinSum(array));
  
  