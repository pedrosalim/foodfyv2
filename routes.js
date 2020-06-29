const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const public = require('./controllers/public')

/* >>>> ROUTES PRINCIPAIS <<<< */
routes.get("/", public.home)
routes.get("/about", public.about)
routes.get("/recipes", public.recipes)
routes.get("/recipe/:index", public.recipe)


/* >>>> ADMIN <<<< */

routes.get("/admin/recipes/index", recipes.index)

routes.get("/admin/recipes/show", recipes.show)

module.exports = routes