function updateDashboard() {
  const getTransferHistory = JSON.parse(window.localStorage.getItem('transferHistory')) || [];
  const getTopupHistory = JSON.parse(window.localStorage.getItem('topupHistory')) || [];

  // EXPENSE
  let tempExpense = 0;
  getTransferHistory.forEach(item => {
    tempExpense += parseInt(item.nominal);
  });

  const expense = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:last-child > p:nth-child(2)');
  expense.textContent = `Rp.${tempExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  // INCOME TOPUP
  const income = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)');
  let tempTopup = 0;
  getTopupHistory.forEach((e) => {
    tempTopup += parseInt(e.nominal);
  });
  income.textContent = `Rp.${tempTopup.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  // BALANCE
  const balance = document.querySelector('.dashboard > div:nth-child(1) > div:nth-child(1) > div:first-child > p:nth-child(2)');
  let calculate = tempTopup - tempExpense;
  balance.textContent = `Rp.${calculate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

  // SIMPAN STATUS KEUANGAN
  const wallet = {
    balance: calculate,
    income: tempTopup,
    expense: tempExpense,
  };
  window.localStorage.setItem('wallet', JSON.stringify(wallet));

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

  // TRANSACTION HISTORY
  const container = document.querySelector('.transaction > .users');
  container.innerHTML = ''; // bersihkan dulu biar ga dobel pas refresh

  getTransferHistory.forEach((item) => {
    const divPeople = document.createElement('div');
    const divImg = document.createElement('div');
    const wrapper = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = item.avatar;
    divImg.append(img);
    wrapper.append(divImg);

    const pPeople = document.createElement('p');
    pPeople.textContent = item.pengirim;
    divPeople.append(pPeople);
    divImg.append(divPeople);

    const pStatus = document.createElement('p');
    pStatus.textContent = 'send';
    divPeople.append(pStatus);
    divImg.append(divPeople);

    const pTransfer = document.createElement('p');
    pTransfer.textContent = `-Rp.${item.nominal}`;
    pTransfer.classList.add('send');
    wrapper.append(pTransfer);

    container.append(wrapper);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
});
