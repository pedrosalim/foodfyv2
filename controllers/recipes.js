const data = require('../data.json')

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