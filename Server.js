const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./db')
const userRoute = require('./routes/userRoute')
const bookRoute = require('./routes/bookRoute')
const path = require('path')

dotenv.config({path: './client/.env.development.local'})

const app = express()

connectDB();

app.use(cors())
app.use(express.json({extended: false}))



// mount route
app.use('/api/v1/book', bookRoute) 
app.use('/api/v1/users', userRoute)

// Serve Static Assets  in production

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/*', (req,res)=> {res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'))})



const port  = process.env.PORT || 7070

app.listen(port,  ()=>{
    console.log(`server started on port ${port}`);
    
})
