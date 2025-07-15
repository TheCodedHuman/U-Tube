import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({ 
    path: './.env'
})

connectDB()                                                         // this returns a promise
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })

    app.on('error', (error) => {                                    // 'error': express related, (error): iife related
        console.log("Server-level error", error);                   // server level error
        throw error
    })
})
.catch((err) => {                                                   // connectivity error
    console.log("MongoDB connection Failed {root_index}", err);
})
        
