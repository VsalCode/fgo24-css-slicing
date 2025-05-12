const getTransferHistory = JSON.parse(window.localStorage.getItem('transferHistory'))
const getTopupHistory = JSON.parse(window.localStorage.getItem('topupHistory'))

// EXPENSE
let tempExpense = 0
getTransferHistory.forEach(item => {
  // console.log(item);
  tempExpense += parseInt(item.nominal)
});
// console.log(tempExpense);

const expense = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:last-child > p:nth-child(2)')
expense.textContent = `Rp.${tempExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`

// INCOME TOPUP
const income = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)')

let tempTopup = 0
getTopupHistory.forEach((e) => {
  // console.log(e.nominal);
  tempTopup += parseInt(e.nominal)
})
// console.log(tempTopup);

income.textContent = `Rp.${tempTopup.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`

// BALANCE
// BALANCE
const balance = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:first-child > p:nth-child(2)');
let calculate = tempTopup - tempExpense;
balance.textContent = `Rp.${calculate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

