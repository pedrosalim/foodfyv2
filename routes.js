const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const public = require('./controllers/public')

/* >>>> ROUTES PRINCIPAIS <<<< */
routes.get("/", public.home)
routes.get("/about", public.about)
routes.get("/recipes", public.recipes)
routes.get("/recipe/:id", public.show)


/* >>>> ADMIN <<<< */

routes.get("/admin/recipes/index", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)

routes.post("/admin/recipes", recipes.post)

module.exports = routes