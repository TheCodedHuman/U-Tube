import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))                            // json limit
app.use(express.urlencoded({ extended: true, limit: "16kb"}))       // url encoding limit
app.use(express.static("public"))                                   // related to public folder 
app.use(cookieParser())


// importing routes
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)    // standard practice


// url that will be created like: https:///localhost:8000/api/v1/users/register
export { app }