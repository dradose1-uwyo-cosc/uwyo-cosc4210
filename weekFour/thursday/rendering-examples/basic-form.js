//Danny Radosevich
// UWYO COSC 4210
// basic form processing 

const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyP = require('body-parser')

const app = express() 

//set up things for our views 
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')

app.use(bodyP.urlencoded({extended:false}))

const port = process.env.port || 3000

app.get('/thanks',(req,res) => res.render('thanks'))

app.get("*",(req,res)=>res.render('basic-form'))

app.post('/form-example',(req,res)=>
{
    console.log(`received contact from ${req.body.name} <${req.body.email}>`)
    res.redirect(303,'/thanks')
})


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))