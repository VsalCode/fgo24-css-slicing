const url = "https://raw.githubusercontent.com/VsalCode/e-wallet-api/refs/heads/main/user-transfer.json";

const arrData = [];

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    arrData.push(...data); 
    handleData(arrData);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const handleData = (data) => {
  const container = document.querySelector("table");
  container.innerHTML = ""; 

  if (data.length === 0) {
    container.innerHTML = "<tr><td colspan='5'>People Not Found</td></tr>";
    return;
  }


  data.forEach((e) => {
    const spanName = document.createElement("span");
    spanName.textContent = e.name;
    const tdSpanName = document.createElement('td')
    tdSpanName.prepend(spanName)

    const spanPhone = document.createElement("span");
    spanPhone.textContent = e.phoneNumber;
    const tdSpanPhone = document.createElement('td')
    tdSpanPhone.prepend(spanPhone)

    const img = document.createElement("img");
    img.setAttribute("src", e.photo);
    const tdImg = document.createElement('td')
    tdImg.prepend(img)

    const starBtn = document.createElement("button");
    const star = document.createElement("img");
    star.setAttribute("src", "/src/icon/star.svg");
    starBtn.append(star);
    starBtn.setAttribute("class", "btn-star");
    const tdButton = document.createElement('td')
    tdButton.prepend(starBtn)

    const tr = document.createElement("tr");
    const div = document.createElement("td");
    div.setAttribute("class", "span-mobile");
    const spanMobile1 = document.createElement("span");
    const spanMobile2 = document.createElement("span");
    spanMobile1.textContent = e.name;
    spanMobile2.textContent = e.phoneNumber;
    div.append(spanMobile1, spanMobile2);

    const a = document.createElement('a')
    a.textContent = 'halo'

    
    tr.append(tdImg);
    tr.append(tdSpanName);
    tr.append(div);
    tr.append(tdSpanPhone);
    tr.append(tdButton);
    tr.append(a);

    const imgEncode = window.btoa(e.photo);
    const phoneEncode = window.btoa(e.phoneNumber);
    const favorite = false;

    a.href = `/pages/transferDetail.html?name=${e.name}&phone=${phoneEncode}&img=${imgEncode}&status=${favorite}`;
    container.append(tr);
  });

  const totalFoundPeople = document.querySelector(".find-people > div:nth-child(1) > div > p:nth-child(2) > .span-jumlah");
  totalFoundPeople.textContent = data.length;
};

// Search
const searchForm = document.querySelector(".find-people > div:nth-child(1) > form");
const searchInput = searchForm.querySelector("input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    handleData(arrData);
  } else {
    const filtered = arrData.filter((user) => user.name.toLowerCase().includes(keyword) || user.phoneNumber.toLowerCase().includes(keyword));
    handleData(filtered);
  }
});

// Nama User
const getUserInfo = JSON.parse(window.localStorage.getItem("user"));
const userName = document.querySelector(".find-people > div:nth-child(1) > div > p:nth-child(2) > .span-nama");

if (getUserInfo?.fullname) {
  userName.textContent = getUserInfo.fullname;
} else if (getUserInfo?.email) {
  const getName = getUserInfo.email.split("@")[0];
  userName.textContent = getName;
}
