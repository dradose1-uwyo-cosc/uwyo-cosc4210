//Danny Radosevich
//Uwyo COSC4210 
// React and the Server
// Based on "Learning React Modern Patterns for Developing React Apps" by Porcello and Banks




const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactDOMServer = require("react-dom/server")


const PORT = process.env.PORT || 3000
const app = express() 

app.use(express.static("../dist"))

app.get("/*",(req,res)=>
{
    res.sendFile("../dist/index.html")
})



app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
)