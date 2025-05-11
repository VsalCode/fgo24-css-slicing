const alertText = document.querySelector(".alert-box > p ");
const alertToogle = document.querySelector(".container > div:first-child");

const form = document.querySelector(".pin-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pinInputs = form.querySelectorAll('input[type="text"]');
  let pin = "";

  pinInputs.forEach((input) => {
    pin += input.value;
  });

  const getUserData = JSON.parse(window.localStorage.getItem("user"));
  const userPin = window.atob(getUserData.pin);

  if (pin === userPin) {
    const successPopUp = document.querySelector(".success-off");
    successPopUp.classList.replace("success-off", "success-on");

    setTimeout(() => {
      window.location.href = "/pages/dashboard.html";
    }, 3000);
  } else if (!/^\d+$/.test(pin)) {
    alertText.textContent = "Pin Harus Berupa Angka!";
    alertToogle.classList.replace("alert-off", "alert-on");
  } else {
    alertText.textContent = "Pin Anda Salah!";
    alertToogle.classList.replace("alert-off", "alert-on");
  }
});

const alertBtn = document.querySelector(".alert-box > button");
alertBtn.addEventListener("click", () => {
  alertToogle.classList.replace("alert-on", "alert-off");
});
