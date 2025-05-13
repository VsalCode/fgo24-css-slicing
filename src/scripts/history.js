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

const getTransferHistory = JSON.parse(window.localStorage.getItem("transferHistory")) || [];

const transferHistory = (data) => {
  const historyList = document.getElementById("history-list");
  const listMobile = document.getElementById("history-list-mobile");
  historyList.innerHTML = "";
  listMobile.innerHTML = "";

  if (data.length === 0) {
    historyList.innerHTML = "<tr><td colspan='5'>Tidak ada riwayat ditemukan.</td></tr>";
    listMobile.innerHTML = "<tr><td colspan='5'>Tidak ada riwayat ditemukan.</td></tr>";
    return;
  }

  data.forEach((item) => {
    const username = item.pengirim;
    const phone = item.phone;
    const img = item.avatar;
    const nominalTf = item.nominal;

    const eImg = document.createElement("img");
    eImg.setAttribute("src", img);

    const span1 = document.createElement("span");
    span1.textContent = username;
    span1.setAttribute("class", "abu");

    const span2 = document.createElement("span");
    span2.textContent = phone;
    span2.setAttribute("class", "abu");

    const span3 = document.createElement("span");
    span3.setAttribute("class", "red");
    span3.textContent = `Rp.${nominalTf}`;

    const wrapper = document.createElement("tr");

    const div1 = document.createElement("td");
    div1.append(eImg);

    const div2 = document.createElement("td");
    div2.append(span1);

    const div3 = document.createElement("td");
    div3.append(span2);

    const div4 = document.createElement("td");
    div4.append(span3);

    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "/src/icon/trash.svg");
    const deleteBtn = document.createElement("button");
    deleteBtn.append(deleteImg);

    const div5 = document.createElement("td");
    div5.append(deleteBtn);

    wrapper.append(div1, div2, div3, div4, div5);
    historyList.prepend(wrapper);

    const wrapperMobile = document.createElement("tr");
    const tdMobile1 = document.createElement("td");
    const tdMobile2 = document.createElement("td");

    const spanMobile1 = document.createElement("span");
    spanMobile1.textContent = username;
    spanMobile1.setAttribute("class", "abu");

    const spanMobile2 = document.createElement("span");
    spanMobile2.textContent = phone;
    spanMobile2.setAttribute("class", "abu");

    const spanMobile3 = document.createElement("span");
    spanMobile3.setAttribute("class", "red");
    spanMobile3.textContent = `Rp.${nominalTf.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const a = document.createElement("a");
    a.textContent = "halo";

    a.addEventListener("click", (e) => {
      e.preventDefault();
      const popup = document.querySelector(".dashboard > div:first-child");
      popup.classList.replace("modal-off", "modal");
      const popupImg = document.getElementById("img-history");
      const popupNama = document.getElementById("nama-history");
      const popupPhone = document.getElementById("status-history");
      const popupStatus = document.getElementById("status-history");
      const popupNominal = document.getElementById("nominal-history");
      popupImg.setAttribute("src", img);
      popupNama.textContent = username;
      popupPhone.textContent = phone;
      popupStatus.textContent = "Transfer Success";
      popupNominal.textContent = `Rp.${nominalTf.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    });

    tdMobile1.prepend(spanMobile1, spanMobile2);
    tdMobile2.prepend(spanMobile3);
    wrapperMobile.prepend(tdMobile1, tdMobile2, a);
    listMobile.prepend(wrapperMobile);

    //  delete history mobile
    const popup = document.querySelector(".dashboard > div:first-child");
    const deleteMobile = document.getElementById("delete");
    deleteMobile.addEventListener("click", (e) => {
      e.preventDefault();
      listMobile.removeChild(wrapper);
    popup.classList.replace("modal", "modal-off");    
    });

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      historyList.removeChild(wrapper);
    });
  });
};

// back popup
const popup = document.querySelector(".dashboard > div:first-child");
const btnBack = document.getElementById("back");
btnBack.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.replace("modal", "modal-off");
});

// search
const searchForm = document.querySelector(".find-people > form");
transferHistory(getTransferHistory);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchKeyword = e.target.keyword.value.trim().toLowerCase();

  if (searchKeyword === "") {
    transferHistory(getTransferHistory);
  } else {
    const filtered = getTransferHistory.filter((item) => {
      return item.pengirim.toLowerCase().includes(searchKeyword) || item.phone.toLowerCase().includes(searchKeyword);
    });

    transferHistory(filtered);
  }
});
