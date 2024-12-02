const express = require("express");
const productRouter = require("./routes/productRouter");
const categorieRouter = require("./routes/categorieRouter");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");
const app = express ()
const PORT = 3000


app.use(express.json())

app.use("/product",productRouter)
app.use("/categorie",categorieRouter)
app.use("/users",userRouter)
app.use("/order",orderRouter)

app.listen(PORT,()=> console.log ("Servidor levantado en el puerto " + PORT))
