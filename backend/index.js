const express = require('express')
const mongoose= require('mongoose')

const route = require('./routes')
const app = express()


const bodyParser = require('body-parser');

const cors = require('cors')




app.use(cors())





mongoose.set('strictQuery', true)

app.use(express.json())
mongoose.connect('mongodb+srv://vintiray:7091201680@cluster0.ahtxrqr.mongodb.net/companyAssignmentFeb').then(()=>{console.log("MONGO db is connect")}).catch((err)=>{console.log(err.message)})

app.use('/',route)

app.listen(3001 , (err)=>{
  if(err)return console.log(err.message)
  console.log("express is running :" ,3001)
})