// INFO USER

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
  userName.textContent = getName;
}

if (getUserInfo.phone) {
  phone.textContent = getUserInfo.phone;
} else {
  phone.textContent = "You have not entered a phone number";
}

// input
const topup = document.querySelector(".account-information > div:nth-child(3) > div > input");
const order = document.querySelector(".payment > div > span:nth-child(2)");

topup.addEventListener("input", (e) => {
  const nominal = parseInt(e.target.value);
  order.textContent = `Idr.${nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  // RADIO BUTTON
  const adminFee = {
    bri: 2500,
    dana: 1000,
    bca: 0,
    gopay: 1500,
    ovo: 2000,
  };

  const subTotal = document.querySelector(".payment > div:nth-child(6) > span:nth-child(2)");

  bri.addEventListener("click", () => {
    const fee = adminFee.bri;
    const delivery = document.querySelector(".payment > div:nth-child(3) > span:nth-child(2)");
    delivery.textContent = `Idr.${fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const pajak = Math.round(fee * 0.11);
    const totalAdmin = fee + pajak;
    const totalText = nominal + totalAdmin;

    subTotal.textContent = `Idr.${totalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  });

  const dana = document.querySelector(".dana");
  dana.addEventListener("click", () => {
    const delivery = document.querySelector(".payment > div:nth-child(3) > span:nth-child(2)");
    delivery.textContent = `Idr.${adminFee.dana.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const pajak = Math.round(adminFee.dana * 0.11);
    const totalAdmin = adminFee.dana + pajak;
    const totalText = nominal + totalAdmin;

    subTotal.textContent = `Idr.${totalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  });

  const bca = document.querySelector(".bca");
  bca.addEventListener("click", () => {
    const delivery = document.querySelector(".payment > div:nth-child(3) > span:nth-child(2)");
    delivery.textContent = "FREE";

    const totalText = nominal;

    subTotal.textContent = `Idr.${totalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  });

  const gopay = document.querySelector(".gopay");
  gopay.addEventListener("click", () => {
    const delivery = document.querySelector(".payment > div:nth-child(3) > span:nth-child(2)");
    delivery.textContent = `Idr.${adminFee.gopay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const pajak = Math.round(adminFee.gopay * 0.11);
    const totalAdmin = adminFee.gopay + pajak;
    const totalText = nominal + totalAdmin;

    subTotal.textContent = `Idr.${totalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  });

  const ovo = document.querySelector(".ovo");
  ovo.addEventListener("click", () => {
    const delivery = document.querySelector(".payment > div:nth-child(3) > span:nth-child(2)");
    delivery.textContent = `Idr.${adminFee.ovo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    const pajak = Math.round(adminFee.ovo * 0.11);
    const totalAdmin = adminFee.ovo + pajak;
    const totalText = nominal + totalAdmin;

    subTotal.textContent = `Idr.${totalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  });
});

//  FORM
const form = document.querySelector(".dashboard-content");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nominal = parseInt(e.target.nominal.value);

  const existing = JSON.parse(localStorage.getItem("topupHistory")) || [];

  // modal success abis loading
  const modalSuccess = document.querySelector(".dashboard > div:nth-child(1)");
  // Loading sebelum success
  const successPopUp = document.querySelector(".dashboard > div:nth-child(2)");

  setTimeout(() => {
    successPopUp.classList.replace("loading-off", "success-on");

    const topup = {
      nominal: nominal,
      date: new Date(),
    };

    existing.push(topup);
    localStorage.setItem("topupHistory", JSON.stringify(existing));

    setTimeout(() => {
        successPopUp.classList.replace("success-on", "loading-off");
        setTimeout(() => {
          modalSuccess.classList.replace("success-off", "modal-success");
        }, 0);
      }, 3000);
  }, 0);

  const btnDone = document.querySelector(".dashboard > div:first-child > div > button:last-child");
  btnDone.addEventListener('click', (e) => {
    e.preventDefault()

    modalSuccess.classList.replace("modal-success", "success-off");
  })

  // e.target.reset();
});
