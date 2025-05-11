const form = document.querySelector(".pin-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pinInputs = form.querySelectorAll('input[type="text"]');
  let pin = "";

  pinInputs.forEach((input) => {
    pin += input.value;
  });

  if (!/^\d+$/.test(pin)) {
    const alertToogle = document.querySelector(".container > div:first-child");
    const alertText = document.querySelector(".alert-box > p ");
    const alertBtn = document.querySelector(".alert-box > button");

    alertText.textContent = "Pin Hanya Berisi Angka!";
    alertToogle.classList.replace("alert-off", "alert-on");

    alertBtn.addEventListener("click", () => {
      alertToogle.classList.replace("alert-on", "alert-off");
    });

    return;
  }

  // Simpan ke localStorage dalam bentuk base64
  const addPin = window.btoa(pin);
  const getData = JSON.parse(window.localStorage.getItem("user"));

  getData.pin = addPin;

  window.localStorage.setItem("user", JSON.stringify(getData));

  const successPopUp = document.querySelector(".success-off");
  successPopUp.classList.replace("success-off", "success-on");

  setTimeout(() => {
    window.location.href = "/pages/login.html";
  }, 3000);
});
