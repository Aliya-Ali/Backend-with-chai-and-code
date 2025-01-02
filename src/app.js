import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"})) // show in json form
app.use(express.urlencoded({extended: true, limit: "16kb"})) // differeent url spealing are understood
app.use(express.static("public")) // store in the public
app.use(cookieParser()) //to access the user's cookie

//routes import 
import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register

export { app }