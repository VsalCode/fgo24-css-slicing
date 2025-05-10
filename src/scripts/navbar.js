const greetings = document.querySelector('nav > div:nth-child(2) > span')
// console.log(greetings2);
const getUser = JSON.parse(window.localStorage.getItem('user'))

if('fullname' in getUser){
  const getFullname = getUser.fullname
  greetings.textContent = getFullname
  
  // greetings.textContent = getFullname
} else {
  const getName = getUser.email.split('@')[0]
  greetings.textContent = getName
}

const navbarImg = document.querySelector('nav > div:nth-child(2) > img:nth-child(2)')

if('profileImage' in getUser){
  navbarImg.setAttribute('src', getUser.profileImage)
} else {
  navbarImg.setAttribute('src', '/src/icon/user-default.png')
}