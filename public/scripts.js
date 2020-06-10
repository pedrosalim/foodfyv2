const cards = document.querySelectorAll('.card');



for(let card of cards) {
    card.addEventListener("click", function() {
        const recipeIndex = card.getAttribute("id")
        window.location.href = `/recipe/${recipeIndex}`
    })
}

const contentList = document.querySelectorAll('.content_list')

for (let attribute of contentList) {
    const button = attribute.querySelector('p')
    const content = attribute.querySelector('.card_content')
    button.addEventListener("click", function(){
        if (button.innerHTML == "MOSTRAR") {
            content.classList.add('show_content')
            button.innerHTML = "ESCONDER"
        }
        else if (button.innerHTML == "ESCONDER") {
            content.classList.remove('show_content')
            button.innerHTML = "MOSTRAR"
        }
    })
}