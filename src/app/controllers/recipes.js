const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    index(req, res) {
        return res.render("./admin/index")
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
    
        const query = `
            INSERT INTO recipes (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `
        
        const values = [
            req.body.chef_id,
            req.body.image,
            req.body.title,
            req.body.ingredients,
            req.body.preparation,
            req.body.information,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error")

            return res.redirect(`/recipes/${results.rows[0].id}`)
        })

    },
    show(req, res) {
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })
    
        if (!foundRecipe) return res.send("Recipe not found!")
    
        const recipe = {
            ...foundRecipe
        }
    
        //const recipeIndex = req.params.index
        //const recipe = recipes[recipeIndex]
     
        return res.render("admin/recipes", {recipe})
    },
    edit(req, res) {
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })
    
        if(!foundRecipe) {
            return res.send("Receita não encontrada!")
        }
    
        const recipe = {
            ...foundRecipe
        }
    
        return res.render("admin/edit", { recipe })
    },
    put(req, res) {
        const { id } = req.body
        let index = 0
        const foundRecipe = data.recipes.find(function(recipe, foundIndex){
            if(id == recipe.id){
                index = foundIndex
                return true
            }
        })
    
        if(!foundRecipe) return res.render("Recipe not found")
    
        const recipe = {
            ...foundRecipe,
            ...req.body,
            id: Number(req.body.id)
        }
    
        data.recipes[index] = recipe
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if(err) return res.send("File write error")
    
            return res.redirect(`recipes/${id}`)
        })
    },
    delete(req, res) {
        const { id } = req.body

        const filteredRecipes = data.recipes.filter(function(recipe) {
            return recipe.id != id
    
        })
    
        data.recipes = filteredRecipes
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if(err) return res.send("Houve um erro!")
    
            return res.redirect("/admin/recipes/index")
        })
    }
}
