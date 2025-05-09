const hamburger = document.querySelector('.nav-mobile > div:first-child > .hamburger')


hamburger.addEventListener('click', (e) => {
  e.preventDefault()
  const img = document.querySelector('.hamburger > img')
  const nav = document.querySelector('.nav-mobile > div:last-child')

  if(img.getAttribute('src') === "/src/icon/hamburger.svg"){
    img.setAttribute('src', '/src/icon/close.svg')
    nav.classList.replace('off', 'on')
  } else if (img.getAttribute('src') === "/src/icon/close.svg"){
    nav.classList.replace('on','off')
    img.setAttribute('src', '/src/icon/hamburger.svg')
  }
})