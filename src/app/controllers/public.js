const Public = require('../models/Public')

module.exports = {
    index(req, res) {
        Public.all(function(recipes) {
            return res.render("./index", { recipes })
        })
    },
    about(req, res) {
        return res.render("about")
    },
    recipes(req, res) {
        return res.render("recipes")
    },
    show(req, res) {
        Public.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            return res.render("./recipe", {recipe})
        })
    
        /*const { id } = req.params
    
        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })
    
        if (!foundRecipe) return res.send("Recipe not found!")
    
        const recipe = {
            ...foundRecipe
        }
    
        //const recipeIndex = req.params.index
        //const recipe = recipes[recipeIndex]
     
        return res.render("./recipe", {recipe})*/
    }
}