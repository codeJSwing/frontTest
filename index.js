import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))

dotenv.config()

import userRouter from "./routes/user.js"

app.use("/", userRouter)
app.use(express.static("public"))

const port = process.env.PORT
app.listen(port,_ => {
    console.log(`Server started at ${port}`)
})