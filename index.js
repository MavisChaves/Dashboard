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

    /* Preencher Pedidos na tabela*/
    document.addEventListener('DOMContentLoaded', () => {
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = ''; // Limpar o conteúdo existente da tabela, se houver
    
        Orders.forEach((order) => {
            const tr = document.createElement('tr');
            const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === 'Recusado' ? 'danger' : order.shipping === 'Pendente' ? 'warning' : 'primary'}">${order.shipping}</td>
                <td class="primary"> Detalhes</td>
            `;
            tr.innerHTML = trContent;
            tbody.appendChild(tr); // Adicionar a linha à tabela
        });
    });
    