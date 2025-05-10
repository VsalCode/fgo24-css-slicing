const greetings = document.querySelector('nav > div:nth-child(2) > span')

// console.log(greetings2);

const getUser = JSON.parse(window.localStorage.getItem('user'))

const getName = getUser.email.split('@')[0]
// console.log(getName);

greetings.textContent = getName

