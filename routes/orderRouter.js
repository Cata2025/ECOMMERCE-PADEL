const express = require("express")
const orderController = require("../controllers/OrderController")
const { authentication } = require("../middleware/authentication")


const orderRouter = express.Router()


orderRouter.get("/:userid", authentication, orderController.getUserOrders)
orderRouter.post("/create", authentication, orderController.createUserOrder)







module.exports = orderRouter