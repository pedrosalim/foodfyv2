const Recipe = require('../models/Recipe')

module.exports = {
    index(req, res) {
        Recipe.all(function(recipes) {
            return res.render("./admin/index", { recipes })
        })
    },
    create(req, res) {
        return res.render("./admin/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos!")
            }
        }
    
        Recipe.create(req.body, function(recipe) {
            return res.redirect(`/admin/recipes/${recipe.id}`)

        })

    },
    show(req, res) {

        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            return res.render("admin/recipes", {recipe})
        })

        // const { id } = req.params

        // const foundRecipe = data.recipes.find(function(recipe) {
        //     return recipe.id == id
        // })
    
        // if (!foundRecipe) return res.send("Recipe not found!")
    
        // const recipe = {
        //     ...foundRecipe
        // }
    
        //const recipeIndex = req.params.index
        //const recipe = recipes[recipeIndex]
     
        
    },
    edit(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            return res.render("admin/edit", {recipe})
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos!")
            }
        }

        Recipe.update(req.body, function() {
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },
    delete(req, res) {
        Recipe.delete(req.body.id, function() {
            return res.redirect(`/admin/recipes/index`)
        })
    }
}
