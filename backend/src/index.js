const express = require('express');
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = 8000
dotenv.config()

const dbService = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.post('/', (req,res) =>{
    console.log(req.body);
})

app.listen(PORT , () => console.log("APP RUNNING"))