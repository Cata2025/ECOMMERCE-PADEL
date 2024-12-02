const express = require("express")
const userController = require("../controllers/UserController")
const { authentication } = require("../middleware/authentication")
const userRouter = express.Router()

userRouter.delete("/logout",authentication,userController.logout)
userRouter.post("/login",userController.login)
userRouter.post("/create", userController.create)
userRouter.patch("/id/:id", userController.update)
userRouter.delete("/id/:id", userController.delete)




module.exports = userRouter