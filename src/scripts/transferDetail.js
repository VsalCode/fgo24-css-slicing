const get = new URLSearchParams(window.location.search);
const getUsername = get.get("name");
const phoneBase64 = get.get("phone");
const imgBase64 = get.get("img");
const statusStar = get.get("status");
// console.log(statusStar);

const getPhone = window.atob(phoneBase64);
const getImage = window.atob(imgBase64);

// console.log(getUsername, getPhone, getImage);

const detailName = document.querySelector(".people-information > div:nth-child(2) > span > div > p:nth-child(1)");
const detailPhone = document.querySelector(".people-information > div:nth-child(2) > span > div > p:nth-child(2)");
const detailImg = document.querySelector(".people-information > div:nth-child(2) > span > img ");

detailName.textContent = getUsername;
detailPhone.textContent = getPhone;
detailImg.setAttribute("src", getImage);

// Button

const btnStar = document.querySelector(".people-information > div:nth-child(2) > button ");
const starImg = document.querySelector(".people-information > div:nth-child(2) > button > img ");

btnStar.addEventListener("click", (e) => {
  e.preventDefault();

  if (statusStar === "false") {
    starImg.src = "/src/icon/star-fill.svg";
    statusStar;
  } else if (statusStar === "true") {
    starImg.src = "/src/icon/star.svg";
  }
});

// FROM TRANSFER
const form = document.querySelector(".people-information");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nominal = e.target.nominal.value;
  // const notes = e.target.notes.value
  //   console.log(nameUser, phone, img, nominal);

  const errMessage = document.querySelector(".error-off");

  if (nominal === "") {
    errMessage.classList.replace("error-off", "error-message");
    setTimeout(() => {
      errMessage.classList.replace("error-message", "error-off");
    }, 2000);
    return;
  }

  // modal pin
  const modal = document.querySelector(".dashboard > div:first-child");
  modal.classList.replace("off", "modal");

  const pinForm = document.querySelector(".dashboard > div:first-child > form");
  console.log(pinForm);

  // Nama penerima (pin input)
  const penerimaTransfer1 = document.querySelector(".dashboard > div:nth-child(1) > form > p:first-child > span");
  penerimaTransfer1.textContent = getUsername;

  // ambil pin
  pinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pinInputs = pinForm.querySelectorAll('input[type="text"]');
    let pin = "";

    pinInputs.forEach((input) => {
      pin += input.value;
    });

    const getUserInfo = JSON.parse(window.localStorage.getItem("user"));
    const currentPin = window.atob(getUserInfo.pin);

    const errorMessage = document.querySelector(".dashboard > div:nth-child(1) > form > p:nth-child(4)");

    if (!/^\d+$/.test(pin)) {
      errorMessage.textContent = "Pin Harus Berupa Angka!";
      errorMessage.classList.replace("error-off", "error-message");
      setTimeout(() => {
        errorMessage.classList.replace("error-message", "error-off");
      }, 3000);
      return;
    }

    if (pin === "") {
      errorMessage.textContent = "Pin Kosong!";
      errorMessage.classList.replace("error-off", "error-message");
      setTimeout(() => {
        errorMessage.classList.replace("error-message", "error-off");
      }, 3000);
      return;
    }

    if (pin !== currentPin) {
      errorMessage.classList.replace("error-off", "error-message");
      setTimeout(() => {
        errorMessage.classList.replace("error-message", "error-off");
      }, 3000);
      return;
    }

    // modal success
    const modalSuccess = document.querySelector(".dashboard > div:nth-child(2)");
    modal.classList.replace("modal", "off");

    const successPopUp = document.querySelector(".loading-off");

    // Nama yg di transfer
    const penerimaTransfer2 = document.querySelector(".dashboard > div:nth-child(2) > div > p:first-child > span");
    penerimaTransfer2.textContent = getUsername;

    setTimeout(() => {
      successPopUp.classList.replace("loading-off", "success-on");

      const userHistory = {
        avatar: getImage,
        pengirim: getUsername,
        phone: getPhone,
        nominal: nominal,
      };

      const getDataHistory = JSON.parse(localStorage.getItem("transferHistory") || "[]");
      getDataHistory.push(userHistory);
      localStorage.setItem("transferHistory", JSON.stringify(getDataHistory));

      setTimeout(() => {
        successPopUp.classList.replace("success-on", "loading-off");
        setTimeout(() => {
          modalSuccess.classList.replace("success-off", "modal-success");
        }, 0);
      }, 3000);
    }, 0);

    const btnSuccess = document.querySelector(".dashboard > div:nth-child(2) > .modal-box > button:nth-child(3) ");
    btnSuccess.addEventListener("click", () => {
      //   modalSuccess.setAttribute("class", "success-off");
      modalSuccess.classList.replace("modal-success", "success-off");
      window.location.href = "/pages/transfer.html";
    });
    const btnBack = document.querySelector(".dashboard > div:nth-child(2) > .modal-box > button:nth-child(4) ");
    btnBack.addEventListener("click", () => {
      modalSuccess.classList.replace("modal-success", "success-off");
    });
  });

  //   // modal btn pin
  //   const modalBtn = document.querySelector(".dashboard > div:first-child > .modal-box > button");
  //   modalBtn.addEventListener("click", () => {
  //   });
});
