const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute('id')
        const title = card.querySelector('.title').innerHTML
        const author = card.querySelector('.author').innerHTML
        

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/assets/${imageId}.png`
        modalOverlay.querySelector('.modal-title').innerHTML = title
        modalOverlay.querySelector('.modal-author').innerHTML = author
        
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})

const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}


