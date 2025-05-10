const url = "https://raw.githubusercontent.com/VsalCode/e-wallet-api/refs/heads/main/user-transfer.txt";

const arrData = [];

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    handleData(data);
    console.log(data);
    
  } catch (err) {
    console.log(err);
  }
};

fetchData();
// console.log(arrData);

const handleData = (arrData) => {
  const container = document.querySelector(".find-people > div:nth-child(2)");
  // const phone = document.querySelector(".find-people > div:nth-child(2) > a > span:nth-child(3)");
  // const image = document.querySelector(".find-people > div:nth-child(2) > a > img");

  arrData.forEach((e) => {
    const spanName = document.createElement('span')
    spanName.textContent = e.name;
    
    const spanPhone = document.createElement('span')
    spanPhone.textContent = e.phoneNumber

    const img = document.createElement('img')
    img.setAttribute('src', `${e.photo}`)

    // star
    const starBtn = document.createElement('button')
    const star = document.createElement('img')
    star.setAttribute('src', '/src/icon/star.svg')
    starBtn.append(star)
    starBtn.setAttribute('class', 'btn-star')

    const a = document.createElement('a')
    a.setAttribute('href', '/pages/transferDetail.html')
  
    a.append(img)
    a.append(spanName)
    a.append(spanPhone) 
    a.append(starBtn)
    container.append(a)

    const imgEncode = window.btoa(e.photo)
    const phoneEncode = window.btoa(e.phoneNumber)

    a.href = `/pages/transferDetail.html?name=${e.name}&phone=${phoneEncode}&img=${imgEncode}`
  });
};
