const fs = require('fs')
const data = require('../data.json')
// const { FileSystemLoader } = require('nunjucks')

exports.index = function(req, res) {
    return res.render("./admin/index", {recipes: data.recipes})
}

exports.create = function(req, res) {
    return res.render("./admin/create")
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("Preencha todos os campos!")
        }
    }

    let { image_url, title, author, ingredients, preparation, information } = req.body
    const lastRecipe = data.recipes[data.recipes.length - 1]

    if(lastRecipe) {
        id = lastRecipe.id + 1
    }
    data.recipes.push({
        id,
        image_url,
        title,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Houve um erro")

        return res.redirect("/admin/recipes/index")
    })

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
 
    return res.render("admin/recipes", {recipe})
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if(!foundRecipe) {
        return res.send("Receita não encontrada!")
    }

    const recipe = {
        ...foundRecipe
    }

    return res.render("admin/edit", { recipe })
}

exports.put = function(req, res){
    const { id } = req.body
    let index = 0
    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if(id == recipe.id){
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.render("Recipe not found")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("File write error")

        return res.redirect(`recipes/${id}`)
    })
}