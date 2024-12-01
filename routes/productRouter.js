const express = require("express")
const productController = require("../controllers/ProductController")
const { authentication } = require("../middleware/authentication")
const productRouter = express.Router()

productRouter.get("/",productController.getAll)
productRouter.get("/:id",productController.getById)
productRouter.get("/search/:query", productController.getProductsByQuery)
productRouter.get("/price-range/one", productController.getByPriceRange)
productRouter.get("/price/sorted", productController.getPriceSortedProducts)
productRouter.post("/create",authentication,productController.create)
productRouter.delete("/:id",authentication, productController.delete)
productRouter.patch("/:id",authentication, productController.update)


module.exports = productRouter