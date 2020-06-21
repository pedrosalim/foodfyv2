const express = require('express')
const routes = express.Router()
const recipes =  require('./src/data')

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

routes.get("/listing/recipes", function(req, res) {
    return res.render("admin/listing", {recipes})
})


module.exports = routes