const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/admin')

/* >>>> ROUTES PRINCIPAIS <<<< */
routes.get("/", function(req, res) {
    return res.render("home", {recipes})
})
routes.get("/about", function(req, res) {
    return res.render("about")
})
routes.get("/recipes", function(req, res) {
    return res.render("recipes", {recipes})
})
routes.get("/recipe/:index", function(req, res) {
    const recipeIndex = req.params.index
    const recipe = recipes[recipeIndex]

    return res.render("recipe", {recipe})
})


/* >>>> ADMIN <<<< */

routes.get("/admin/recipes", function(req, res) {
    return res.render("admin/recipes", {recipes})
})

routes.get("/admin/create", recipes.create)

module.exports = routes