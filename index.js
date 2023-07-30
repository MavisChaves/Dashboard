/* Modo dark e Modo Light */

const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")


/* Mostrar barra lateral */
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block'
})

closeBtn.addEventListener('click',() =>{
    sideMenu.style.display ='none'
})

/* Mudar Tema */
themeToggler.addEventListener('click',function () {
        document.body.classList.toggle('dark-theme-variables')
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
        
    })