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

// CHART
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Balance', 'Income', 'Expense'],
      datasets: [{
        label: 'Balance, Income, and Expense Chart',
        data: [calculate, tempTopup, tempExpense],
        borderWidth: 1,
        backgroundColor: '#2949ffa1'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


// Transaction History
getTransferHistory.forEach((item) => {
  
  console.log(item.avatar);
  console.log(item.pengirim);
  console.log(item.nominal);
  
  const container = document.querySelector('.transaction > .users')
  const divPeople = document.createElement('div') //robert fox / transfer
  const divImg = document.createElement('div') // img 
  const wrapper = document.createElement('div') // p
  
  const img = document.createElement('img')
  img.src = item.avatar
  divImg.append(img)
  wrapper.append(divImg)
  container.append(wrapper)

  const pPeople = document.createElement('p')
  pPeople.textContent = item.pengirim
  divPeople.append(pPeople)
  divImg.append(divPeople)
  wrapper.append(divImg)
  container.append(wrapper)

  const pStatus = document.createElement('p')
  pStatus.textContent = 'send'
  divPeople.append(pStatus)
  divImg.append(divPeople)
  wrapper.append(divImg)
  container.append(wrapper)


  const pTransfer = document.createElement('p')
  pTransfer.textContent = `-Rp.${item.nominal}`
  pTransfer.setAttribute('class', 'send')
  wrapper.append(pTransfer)
  container.append(wrapper)
})

