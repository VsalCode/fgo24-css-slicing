const form = document.getElementById('pin-form')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const pinInputs = form.querySelectorAll('input[type="text"]');
  
  let pin = "";
  pinInputs.forEach((input) => {
    pin += input.value;
  });
  // console.log(pin);
  // console.log(typeof pin);

  const getUserInfo = JSON.parse(window.localStorage.getItem("user"));
  const localPin = window.atob(getUserInfo.pin);
  // console.log(localPin);
  // console.log(typeof localPin);
  
  const error = document.querySelector("form > p:last-child");
  // console.log(error);
  error.classList.replace("error-message", "error-off");
  error.textContent = "";

  if (!pinInputs) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Input harus diisi!";
    return;
  }

  if ((!/^\d+$/.test(pin))) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Input harus berupa angka!";
    return;
  }



  if (pin === localPin) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Pin baru tidak boleh sama dengan password lama!";
    return;
  }

  console.log(pin);
  
  getUserInfo.pin = window.btoa(pin);
  window.localStorage.setItem("user", JSON.stringify(getUserInfo));

  form.reset();
  error.classList.replace("error-off", "error-message");
  error.style.color = "green";
  error.textContent = "Pin berhasil diperbarui!";

})

