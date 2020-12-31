const Chef = require('../models/Chef')

module.exports = {
    indexPublic(req, res) {
        Chef.all(function(chefs) {
            return res.render("./chefs/index", { chefs })
        })
    },
    index(req, res) {
        Chef.all(function(chefs) {
            return res.render("./admin/chefIndex", { chefs })
        })
    },
    create(req, res) {
        return res.render("./admin/createChef")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos!")
            }
        }
    
        Chef.create(req.body, function(chef) {
            return res.redirect(`/admin/chefs/${chef.id}`)
            // return res.send("Ok")

        })

    },
    show(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send("chef not found!")

            return res.render("admin/showChef", {chef})
        })
    },
    edit(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send("Chef not found!")

            return res.render("admin/editChef", {chef})
        })
    },
    put: function(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Preencha todos os campos!")
            }
        }

        Chef.update(req.body, function() {
            res.redirect(`/admin/chefs/${req.body.id}`)
        })
    }
}