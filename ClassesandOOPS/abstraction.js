class Bank {
    constructor(initialBalance = 0) {
      let currentBalance = initialBalance; // Private variable via closure
  
      this.withdrawal = function (amount) {
        if (currentBalance - amount >= 0) {
          currentBalance -= amount;
          console.log("Money withdrawn successfully.");
        } else {
          console.log("Insufficient funds.");
        }
      };
  
      this.deposit = function (amount) {
        if (amount <= 0) {
          console.log("Invalid deposit amount.");
        } else {
          currentBalance += amount;
          console.log("Money deposited successfully.");
        }
      };
  
      this.getNewBalance = function () {
        console.log(`Your current balance is: ${currentBalance}`);
      };
    }
  }
  
  // Usage
  const res = new Bank(10000);
  res.deposit(10000)
  res.getNewBalance(); // Call the method to get balance
  