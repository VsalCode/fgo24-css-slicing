    const get = new URLSearchParams(window.location.search)
    const getUsername = get.get('name')
    const phoneBase64 = get.get('phone')
    const imgBase64 = get.get('img')

    const getPhone = window.atob(phoneBase64)
    const getImage = window.atob(imgBase64)

    // console.log(getUsername, getPhone, getImage);

    const detailName = document.querySelector('.people-information > div:nth-child(2) > span > div > p:nth-child(1)')
    const detailPhone = document.querySelector('.people-information > div:nth-child(2) > span > div > p:nth-child(2)')
    const detailImg = document.querySelector('.people-information > div:nth-child(2) > span > img ') 
    

    detailName.textContent = getUsername
    detailPhone.textContent = getPhone
    detailImg.setAttribute('src', getImage)

    