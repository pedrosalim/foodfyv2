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
routes.get("/admin/chefIndex", chefs.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/chefs/create", chefs.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/chefs/:id", chefs.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.get("/admin/chefs/:id/editChef", chefs.edit)

routes.post("/admin/recipes", recipes.post)
routes.post("/admin/chefs", chefs.post)
routes.put("/admin/recipes", recipes.put)
routes.put("/admin/editChef", chefs.put)
routes.delete("/admin/recipes", recipes.delete)


/* >>>> CHEFS <<<< */

routes.get("/chefs", chefs.index)
routes.get("/chefspublic", chefs.indexPublic)




module.exports = routes