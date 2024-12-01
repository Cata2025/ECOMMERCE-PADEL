const express = require("express")
const categorieController = require("../controllers/CategorieController")

const categorieRouter = express.Router()


categorieRouter.get("/:name",categorieController.getProducts)
categorieRouter.post("/create", categorieController.create)
categorieRouter.get("/name/:id", categorieController.getName)






module.exports = categorieRouter