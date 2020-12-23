const express = require('express')
const routes = express.Router()
const recipes = require('./app/controllers/recipes')
const public = require('./app/controllers/public')
const chefs = require('./app/controllers/chefs')

/* >>>> ROUTES PRINCIPAIS <<<< */
routes.get("/", public.index)
routes.get("/about", public.about)
routes.get("/recipes", public.recipes)
routes.get("/recipe/:id", public.show)


/* >>>> ADMIN <<<< */

routes.get("/admin/recipes/index", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.get("/admin/chefs/create", chefs.create)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)
routes.get("/admin/chefs", chefs.post)


/* >>>> CHEFS <<<< */

routes.get("/chefs", chefs.index)



module.exports = routes