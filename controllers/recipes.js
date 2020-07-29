const data = require('../data.json')
// const { FileSystemLoader } = require('nunjucks')
const fs = require('fs')

exports.index = function(req, res) {
    return res.render("admin/index", {recipes: data.recipes})
}

exports.show = function(req, res) {

    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!")

    const recipe = {
        ...foundRecipe
    }

    //const recipeIndex = req.params.index
    //const recipe = recipes[recipeIndex]
 
    return res.render("./admin/recipes", {recipe})
}

exports.create = function(req, res) {
    return res.render("admin/create")
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Preencha todos os campos!!")
        }
    }

    let { image_url, name, author, ingredients, preparations, information } = req.body

    let id = 1
    const lastRecipes = data.recipes[data.recipes.length - 1]

    if (lastRecipes) {
        id = lastRecipes.id + 1
    }

    data.recipes.push({
        id,
        image_url,
        name,
        author,
        ingredients,
        preparations,
        information
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Houve um erro")

        return res.redirect("/admin/recipes/index")
    })
}