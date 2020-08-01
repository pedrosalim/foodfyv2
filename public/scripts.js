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
        if (button.innerHTML == "ESCONDER") {
            content.classList.add('show_content')
            button.innerHTML = "MOSTRAR"
        }
        else if (button.innerHTML == "MOSTRAR") {
            content.classList.remove('show_content')
            button.innerHTML = "ESCONDER"
        }
    })
}

/* CAMPO DINAMICO */

const addField = {
    add(parentSelector) {
        const parent = document.querySelector(parentSelector)

        if(parent) {
            const fields = parent.querySelectorAll("input")
            const lastField = fields[fields.length - 1]

            if (lastField && lastField.value === '') return false
            
            const newField = lastField && lastField.cloneNode(true)

            newField.value = ''

            parent.appendChild(newField)

            return newField
        }

        return false
    },

    listen() {
        const addIngredient = document.querySelector(".addIngredients")
        const addPreparation = document.querySelector(".addPreparations")

        if (addIngredient) {
            document.querySelector('.addIngredients').addEventListener("click", () => { addField.add('#newIngredient') })
        }

        if (addPreparation) {
            document.querySelector('.addPreparations').addEventListener("click", () => { addField.add('#newPreparation') })
        }
    }
}

addField.listen()