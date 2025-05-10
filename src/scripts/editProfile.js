const form = document.querySelector(".edit-profile");
const editProfileImage = document.querySelector(".profile-picture > :nth-child(1) > img");
const fileInput = document.getElementById("uploaded");
const deleteBtn = document.querySelector('.profile-picture > :nth-child(2) > button:nth-child(2)')

// Preview
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    editProfileImage.src = URL.createObjectURL(file);
  }
});

deleteBtn.addEventListener('click', () => {
  // editProfileImage.src = '/src/icon/user-default.png'

  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser?.profileImage) {
    delete savedUser.profileImage

    localStorage.setItem("user", JSON.stringify(savedUser));
    window.location.reload();
  }
})

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newFullname = e.target.fullname.value;
  const addPhoneNumber = e.target.phone.value;
  const newEmail = e.target.email.value;
  const file = fileInput.files[0];

  const getUserInfo = JSON.parse(localStorage.getItem("user"))

  getUserInfo.email = newEmail;
  getUserInfo.fullname = newFullname;
  getUserInfo.phone = addPhoneNumber;

  if (file) {

    const reader = new FileReader();
    reader.onload = function (event) {
      const base64Image = event.target.result;
      getUserInfo.profileImage = base64Image;

      localStorage.setItem("user", JSON.stringify(getUserInfo));

      editProfileImage.src = base64Image;
      window.location.reload();
    };
    reader.readAsDataURL(file);

  } else {

    localStorage.setItem("user", JSON.stringify(getUserInfo));
    window.location.reload();

  }
});

const savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser?.profileImage) {
  editProfileImage.src = savedUser.profileImage;
}
