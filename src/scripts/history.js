// const url = "https://raw.githubusercontent.com/VsalCode/e-wallet-api/refs/heads/main/user-history-transaction.json";

// let arrData = [];

// const fetchData = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     arrData.push(...data);
//     handleData(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// fetchData();

// const handleData = () => {
//   // console.log(arrData);
//     arrData.forEach((item) => {
//       const username = item.name;
//       const phone = item.phoneNumber;
//       const img = item.photo;
//       const nominalTf = item.nominalTransfer;
//       const statusTf = item.statusTransfer;

//       const eImg = document.createElement("img");
//       eImg.setAttribute("src", img);
//       // console.log(username, phone, img, nominalTf, statusTf);

//       const span1 = document.createElement("span");
//       span1.textContent = username;
//       span1.setAttribute('class', 'abu')

//       const span2 = document.createElement("span");
//       span2.textContent = phone;
//       span2.setAttribute('class', 'abu')

//       const span3 = document.createElement('span')
//       if(statusTf === 'send'){
//         span3.setAttribute('class', 'red')
//         span3.textContent = `Rp.${nominalTf}`
//       } else if (statusTf === 'transfer'){
//         span3.setAttribute('class', 'green')
//         span3.textContent = `Rp.${nominalTf}`
//       }

//       const historyList = document.querySelector(".history-list");
//       const wrapper = document.createElement('div')
    
//       const div1 = document.createElement('div')
//       div1.append(eImg);

//       const div2 = document.createElement('div')
//       div2.append(span1);
      
//       const div3 = document.createElement('div')
//       div3.append(span2);

//       const div4 = document.createElement('div')
//       div4.append(span3)
      
//       const deleteImg = document.createElement('img')
//       deleteImg.setAttribute('src', '/src/icon/trash.svg')
//       const deleteBtn = document.createElement('button')
//       deleteBtn.append(deleteImg)
//       const div5 = document.createElement('div')
//       div5.append(deleteBtn)

//       wrapper.append(div1, div2, div3, div4, div5)
//       historyList.append(wrapper)


//       deleteBtn.addEventListener('click', (e) => {
//         e.preventDefault()

//         historyList.removeChild(wrapper)
//       })
//     });
    
// };

// handleData();


const getTransferHistory = JSON.parse(window.localStorage.getItem('transferHistory'))
// console.log(typeof getTransferHistory);


getTransferHistory.forEach((item) => {
  // console.log(user);

    const username = item.pengirim;
    const phone = item.phone;
    const img = item.avatar;
    const nominalTf = item.nominal;

    const eImg = document.createElement("img");
    eImg.setAttribute("src", img);
    // console.log(username, phone, img, nominalTf, statusTf);

    const span1 = document.createElement("span");
    span1.textContent = username;
    span1.setAttribute('class', 'abu')

    const span2 = document.createElement("span");
    span2.textContent = phone;
    span2.setAttribute('class', 'abu')

    const span3 = document.createElement('span')
    span3.setAttribute('class', 'red')
    span3.textContent = `Rp.${nominalTf}`

    const historyList = document.querySelector(".history-list");
    const wrapper = document.createElement('div')
   
    const div1 = document.createElement('div')
    div1.append(eImg);

    const div2 = document.createElement('div')
    div2.append(span1);
    
    const div3 = document.createElement('div')
    div3.append(span2);

    const div4 = document.createElement('div')
    div4.append(span3)
    
    const deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', '/src/icon/trash.svg')
    const deleteBtn = document.createElement('button')
    deleteBtn.append(deleteImg)
    const div5 = document.createElement('div')
    div5.append(deleteBtn)

    wrapper.append(div1, div2, div3, div4, div5)
    historyList.prepend(wrapper)


    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault()

      historyList.removeChild(wrapper)
    })
})