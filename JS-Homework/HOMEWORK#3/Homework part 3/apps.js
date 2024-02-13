console.log("It is live!");

function atm(withdraw) {
    let accountMoney = 5000;
    
    if (withdraw > accountMoney) {
      return "Not enough money"; 
    }
    else {
      accountMoney -= withdraw;
      return "You withdrew " + withdraw + ". Money left: " + accountMoney;
    }
  }

  let withdrawAmount = prompt("Enter withdraw amount:");
  console.log(atm(withdrawAmount));
  
  console.log(atm(100)); 
  console.log(atm(6000));