const menuToogle = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

menuToogle.addEventListener('click', () =>{
    menuToogle.classList.toggle('active')
    menu.classList.toggle('active')
})

document.querySelectorAll('.menu li').forEach((item) => item.addEventListener("click" , (a) =>{
    menuToogle.classList.remove('active')
    menu.classList.remove('active')

    const ativos = document.querySelectorAll('.menu li.active')
    const remover = () => ativos.forEach((item) => item.classList.remove('active'));
    const adicionar = () => a.currentTarget.classList.add('active')

    remover();
    adicionar();
}))


document.querySelectorAll('.side-right--types .box')
.forEach((item) => item.addEventListener('click', (e) => {
    const ativos = document.querySelectorAll('.box.active')
    const remover = () => ativos.forEach((item) => item.classList.remove('active'))
    const adicionar = () => e.currentTarget.classList.add('active') 
    remover();
    adicionar();
}))
