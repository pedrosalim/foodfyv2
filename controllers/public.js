const data = require('../data.json')

exports.home = function(req, res) {
    return res.render("home", {recipes: data.recipes})
}

exports.about = function(req, res) {
    return res.render("about")
}

exports.recipes = function(req, res) {
    return res.render("recipes", {recipes: data.recipes})
}

exports.show = function(req, res) {

    const index = req.params.index;

    const recipe = data.recipes.find(recipe => recipe.id == index);

    res.render("./recipe", { recipe });

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