const express = require("express")
const userController = require("../controllers/UserController")
const { authentication } = require("../middleware/authentication")
const userRouter = express.Router()

userRouter.get("/logout",authentication,userController.logout)
userRouter.post("/login",userController.login)
userRouter.post("/create", userController.create)



module.exports = userRouter