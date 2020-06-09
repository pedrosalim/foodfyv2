const express = require('express')
const nunjucks = require('nunjucks')


const server = express()


server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("src/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes")
})

server.listen(5000, function() {
    console.log("server is running!")
})