// REGISTER LOGIC

const alertToogle = document.querySelector(".container > div:first-child");
const alertBtn = document.querySelector(".alert-box > button");

const form = document.querySelector(".form > form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirm.value;

  const password64 = window.btoa(password)
  
  

  const alertText = document.querySelector(".alert-box > p ");

  if (password === "") {
    alertText.textContent = "Password harus diisi!";
    alertToogle.classList.replace("alert-off", "alert-on")
    return;
  } 
  
  if (email === "") {
    alertText.textContent = "Email harus diisi!";
    alertToogle.classList.replace("alert-off", "alert-on");
    return;
  } 
  
  if (password !== confirmPassword) {
    alertText.textContent = "password harus sama dengan confirm password";
    alertToogle.classList.replace("alert-off", "alert-on");
    return;
  } 
    const successPopUp = document.querySelector(".success-off");
    successPopUp.classList.replace("success-off", "success-on");

    // console.log({email: email, password: password});
    const user = {
      email: email,
      password: password64,
    };

    const addUser = JSON.stringify(user);
    window.localStorage.setItem("user", addUser);

    setTimeout(() => {
      window.location.href = "/pages/createPin.html";
    }, 3000 )
});

// BUTTON ALERT
// ALERT

alertBtn.addEventListener("click", () => {
  alertToogle.classList.replace("alert-on", "alert-off");
});

// BUTTON PASSWORD
const button = document.querySelectorAll(".Password >  span > button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    const image = document.querySelectorAll(".Password >  span > button > img");
    image.forEach((img) => {
      const input = document.querySelectorAll(".Password >  span > input");

      if (img.getAttribute("src") === "/src/icon/eye-open.svg") {
        img.setAttribute("src", "/src/icon/eye-off.svg");
        input.forEach((e) => {
          e.setAttribute("type", "text");
        });
      } else if (img.getAttribute("src") === "/src/icon/eye-off.svg") {
        img.setAttribute("src", "/src/icon/eye-open.svg");
        input.forEach((e) => {
          e.setAttribute("type", "password");
        });
      }
    });
  });
});
