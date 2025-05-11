const form = document.querySelector(".form > form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const getUser = JSON.parse(window.localStorage.getItem("user"));
  // console.log(typeof getUser.email);
  const userPassword = window.atob(getUser.password)
  // console.log(userPassword);
  

  const alertText = document.querySelector(".alert-box > p ");

  if (email === getUser.email && password === userPassword) {

    const successPopUp = document.querySelector(".success-off");
    successPopUp.classList.replace("success-off", "success-on");

    setTimeout(() => {
      window.location.href = "/pages/enterPin.html";
    }, 3000)
  } else if (email === "" || password === "" || (email === "" && password === "")) {

    alertText.textContent = "Email atau Input Tidak Boleh Kosong!"
    alertToogle.classList.replace("alert-off", "alert-on");

  } else if (email !== getUser.email) {
  
    alertText.textContent = "Email yang anda inputkan salah!"
    alertToogle.classList.replace("alert-off", "alert-on");
  
  } else if (password !== userPassword) {

    alertText.textContent = "Password yang anda inputkan salah!"
    alertToogle.classList.replace("alert-off", "alert-on");

  } else {

      alertText.textContent = "Email dan Password anda salah!"
    alertToogle.classList.replace("alert-off", "alert-on");
  }
});

const btn = document.querySelector(".Password > span > button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const img = document.querySelector(".Password > span > button > img");
  const input = document.querySelector(".Password > span > input");

  if (img.getAttribute("src") === "/src/icon/eye-open.svg") {
    img.setAttribute("src", "/src/icon/eye-off.svg");
    input.setAttribute("type", "text");
  } else if (img.getAttribute("src") === "/src/icon/eye-off.svg") {
    img.setAttribute("src", "/src/icon/eye-open.svg");
    input.setAttribute("type", "password");
  }
});

// ALERT
const alertToogle = document.querySelector(".container > div:first-child");
const alertBtn = document.querySelector(".alert-box > button");

alertBtn.addEventListener("click", () => {
  alertToogle.classList.replace("alert-on", "alert-off");
});
