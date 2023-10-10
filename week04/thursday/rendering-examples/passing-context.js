//Danny Radosevich
// UWYO COSC 4210
// passing context

const express = require('express')
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const crypto = require('crypto') 

//set up some random string to use as a secret
const randomBuffer = crypto.randomBytes(16)
const secretKey = crypto.createHash('sha256').update(randomBuffer).digest('hex')



const app = express() 

//we need this to support cookies
app.use(cookieParser())

//set up things for our views 
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

//set up session support
app.use(session({ resave: false, saveUninitialized: false, secret: secretKey}))

app.get('/greeting',(req,res) =>
{
    res.render('greeting',
    {
        //all the variables /greeting is expecting
        message: 'hi class!',
        userid: req.cookies.userid,
        username: req.session.username
    })
})

app.get('/rand-id',(req,res)=>
{
    res.cookie('userid',(Math.random()*10000).toFixed(0))
    res.redirect('/greeting')
})

app.get('/rand-name',(req,res)=>
{
    req.session.username = catNames.random()
    res.redirect('greeting')
})

app.get('*', (req, res) =>
{
    res.cookie('userid',(Math.random()*10000).toFixed(0))
    req.session.username = catNames.random()

    res.send('Be sure to visit our <a href="/greeting">greeting</a> page!')
})

const port = process.env.port || 3000
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))