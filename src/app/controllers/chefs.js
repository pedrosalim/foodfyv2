const Chef = require('../models/Chef')

module.exports = {
    index(req, res) {
        Chef.all(function(chefs) {
            return res.render("./chefs/index", { chefs })
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
            return res.redirect(`/chefs/${chef.id}`)
            // return res.send("Ok")

        })

    },
}