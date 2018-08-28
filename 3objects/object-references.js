let myAccount = {
  name: 'Misha Plisko',
  expenses: 0,
  income: 0
};

let addExpence = function(account, amount){
  account.expenses += amount;
  //console.log(account);
};

// addIncome
letAddIncome = function(account, ammount){
  account.income += ammount;
  //console.log(account);
};

// resetAccount
let resetAccount = function(account){
  account.income = 0;
  account.expenses = 0;
};

// getAccountSummary
// account for Andrew has 900$, 1000$ in income, 100$ in expences
let getAccountSummary = function(account){
  let summary = account.income - account.expenses;
  return `Account for ${account.name} has $${summary} : ${account.income} in income, ${account.expenses} in expences`;
};

addExpence(myAccount, 300);
letAddIncome(myAccount, 900);

//resetAccount(myAccount);

console.log(getAccountSummary(myAccount));