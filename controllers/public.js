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

exports.recipe = function(req, res) {
    const recipeIndex = req.params.index
    const recipe = recipes[recipeIndex]
 
    return res.render("recipe", {recipe})
}