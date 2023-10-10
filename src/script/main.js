
const htmlBody = document.body
const darkMode = document.querySelector('#dark')
const navbarVal = document.querySelector('.navbar-val')
document.querySelector('#menu').onclick = () => {
    navbarVal.classList.toggle('active')
}
darkMode.onclick = () => {
    htmlBody.classList.toggle('dark')
}

const menu = document.querySelector('#menu')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarVal.contains(e.target)) {
        navbarVal.classList.remove('active')
    }
})