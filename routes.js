const express = require('express')
const routes = express.Router()
const recipes = require('./data')

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

routes.get("/admin/recipes/index", function(req, res) {
    return res.render("admin/index", {recipes})
})
/*
routes.get("/admin/recipes", recipes.index);

routes.get("/admin/recipes/create", recipes.create)
routes.post("/admin/recipes/create", recipes.post)

routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)*/

module.exports = routes