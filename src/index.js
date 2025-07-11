// require('dotenv').config({ path: './env' })          # commonjs method

import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({ 
    path: './env'
})

connectDB()
















/* Method 1
import express from 'express'
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch(error) {
        console.error("ERROR:\t", error)
        throw error
    }

    app.on("errror", (error) => {
        console.log("ERRR:\t", error);
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })

})()
*/
