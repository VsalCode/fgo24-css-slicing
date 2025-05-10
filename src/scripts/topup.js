const img = document.querySelector(".account-information > div:nth-child(2) > span > img ");
const userName = document.querySelector(".account-information > div:nth-child(2) > span > div > p:nth-child(1) ");
const phone = document.querySelector(".account-information > div:nth-child(2) > span > div > p:nth-child(2) ");

const getUserInfo = JSON.parse(window.localStorage.getItem("user"));

console.log(getUserInfo);

if (getUserInfo.profileImage) {
  img.src = getUserInfo.profileImage;
} else {
  img.src = "/src/icon/user-default.png";
}

if (getUserInfo.fullname) {
  userName.textContent = getUserInfo.fullname;
} else {
  const getName = getUserInfo.email.split("@")[0];
  userName.textContent = getName
}

if(getUserInfo.phone){
  phone.textContent = getUserInfo.phone
} else {
  phone.textContent = 'You have not entered a phone number'
}
