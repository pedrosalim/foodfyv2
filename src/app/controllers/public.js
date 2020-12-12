module.exports = {
    index(req, res) {
        return res.render("index")
    },
    about(req, res) {
        return res.render("about")
    },
    recipes(req, res) {
        return res.render("recipes")
    },
    show(req, res) {
        const index = req.params.index;

        const recipe = data.recipes.find(recipe => recipe.id == index);
    
        res.render("./recipe");
    
        /*const { id } = req.params
    
        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })
    
        if (!foundRecipe) return res.send("Recipe not found!")
    
        const recipe = {
            ...foundRecipe
        }
    
        //const recipeIndex = req.params.index
        //const recipe = recipes[recipeIndex]
     
        return res.render("./recipe", {recipe})*/
    }
}