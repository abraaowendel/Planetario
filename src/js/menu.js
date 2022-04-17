const menuToogle = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

menuToogle.addEventListener('click', () =>{
    menuToogle.classList.toggle('active')
    menu.classList.toggle('active')
})

document.querySelectorAll('.menu li').forEach((item) => item.addEventListener("click" , () =>{
    menuToogle.classList.remove('active')
    menu.classList.remove('active')
}))
