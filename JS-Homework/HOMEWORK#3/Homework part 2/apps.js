console.log("It is live");

function myDogYears(dogYears, humanYearsPerDogYear) {
    let result = dogYears * humanYearsPerDogYear;
    return result;
}

let myDogYearsResult = myDogYears(7, 7);

console.log(myDogYearsResult);

function myHumanYears(humanYears, dogYearsPerHumanYear) {
    let result = humanYears * dogYearsPerHumanYear; 
    return result;
  }

  let myHumanYearsResult = myHumanYears(20, 0.143);

  console.log(myHumanYearsResult);