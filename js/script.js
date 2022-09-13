const calculateExpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const balance = document.getElementById("balance").innerText;
  const balanceParse = parseInt(balance)

  const savePercentage = document.getElementById("save").value;
  const savePercentageParse = parseInt(savePercentage)
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (balanceParse / 100) * savePercentageParse;
  console.log(savingAmount)

  // calculate remaining balance
  
  let remainingBalance = balanceParse  - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
