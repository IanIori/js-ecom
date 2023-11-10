import express from "express";
import db from "./database/config.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";

const app = express()
app.use(express.json())

app.get('/healthcheck', (req,res) => {
    res.status(200).send("Ok!")
})

const categoryRoutes = new CategoryRoutes(db)
app.use('/categories', categoryRoutes.routes())

/* const userrorutes = new Userrorutes(db)
app.use('/users', userrorutes.routes()) */

app.listen(3000, () => {
    console.log("Server working on port 3000")
})