const getTransferHistory = JSON.parse(window.localStorage.getItem('transferHistory'))

let temp = 0
getTransferHistory.forEach(item => {
  // console.log(item);
  temp += parseInt(item.nominal)
  return temp
});

// console.log(temp);

const expense = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:last-child > p:nth-child(2)')
expense.textContent = `Rp.${temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`

const balance = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:first-child > p:nth-child(2)')
let calculate = 0 - temp
balance.textContent = `Rp.${calculate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`

// Transaction History
