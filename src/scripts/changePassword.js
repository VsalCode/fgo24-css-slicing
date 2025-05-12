const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentPassword = e.target.password.value;
  const newPassword = e.target.newPassword.value;
  const confirmPassword = e.target.confirm.value;

  const getUserInfo = JSON.parse(window.localStorage.getItem("user"));
  const localPassword = window.atob(getUserInfo.password);

  const error = document.querySelector("form > p:last-child");

  if (localPassword === currentPassword) {
    getUserInfo.password = window.btoa(newPassword);
    window.localStorage.setItem("user", JSON.stringify(getUserInfo));
    
  } else if (currentPassword === "") {
    error.classList.replace("error-off", "error-message");
    setTimeout(() => {
      error.textContent = "Input Tidak Boleh Kosong";
    }, 3000);
  } else if (newPassword === localPassword) {
    setTimeout(() => {
      error.classList.replace("error-off", "error-message");
      error.textContent = "Password Baru Tidak Boleh sama dengan yang lama";
    }, 3000);
  } else if (newPassword !== confirmPassword) {
    setTimeout(() => {
      error.classList.replace("error-off", "error-message");
      error.textContent = "Password dan Confirm Password harus Sama!";
    }, 3000);
  } else {
    setTimeout(() => {
      error.classList.replace("error-off", "error-message");
      error.textContent = "Existing Password anda salah";
    }, 3000);
  }
});

const btnPassword = document.querySelector('form > div > span > button')
btnPassword.addEventListener('click', (e) => {
  e.preventDefault()
  const imgEye = document.querySelector('form > div > span > button > img')
  const imgEye2 = document.querySelector('form > div > span > button > img')
  const imgEye3 = document.querySelector('form > div > span > button > img')

  const input1 = document.querySelector('form > div > span > input')

  
 if(imgEye.getAttribute('src') === '/src/icon/eye-open.svg'){
  imgEye.setAttribute('src', '/src/icon/eye-off.svg')
  input1.setAttribute('type', 'text')
} else if (imgEye.getAttribute('src') === '/src/icon/eye-off.svg') {
  imgEye.setAttribute('src', '/src/icon/eye-open.svg')
  input1.setAttribute('type', 'password')
 }

})