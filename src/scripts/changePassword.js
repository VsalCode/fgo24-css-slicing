const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentPassword = e.target.password.value;
  const newPassword = e.target.newPassword.value;
  const confirmPassword = e.target.confirm.value;

  const getUserInfo = JSON.parse(window.localStorage.getItem("user"));
  const localPassword = window.atob(getUserInfo.password);

  const error = document.querySelector("form > p:last-child");

  // Reset error
  error.classList.replace("error-message", "error-off");
  error.textContent = "";

  // Validasi kosong
  if (!currentPassword || !newPassword || !confirmPassword) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Semua input harus diisi!";
    return;
  }

  // Password lama salah
  if (currentPassword !== localPassword) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Password lama salah!";
    return;
  }

  if (newPassword === localPassword) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Password baru tidak boleh sama dengan password lama!";
    return;
  }

  if (newPassword !== confirmPassword) {
    error.classList.replace("error-off", "error-message");
    error.textContent = "Password dan konfirmasi harus sama!";
    return;
  }

  getUserInfo.password = window.btoa(newPassword);
  window.localStorage.setItem("user", JSON.stringify(getUserInfo));

  form.reset();
  error.classList.replace("error-off", "error-message");
  error.style.color = "green";
  error.textContent = "Password berhasil diperbarui!";
});

// perbaiki logic form untuk ganti password

const btnPasswords = document.querySelectorAll('form > div > span > button');

btnPasswords.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = btn.parentElement.querySelector("input");
    const img = btn.querySelector("img");

    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
      img.setAttribute("src", "/src/icon/eye-off.svg");
    } else {
      input.setAttribute("type", "password");
      img.setAttribute("src", "/src/icon/eye-open.svg");
    }
  });
});
