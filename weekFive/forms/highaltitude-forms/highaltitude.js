//Danny Radosevich
//UWYO COSC4210
//Getting Started with Express
//Initial Steps


const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')
const weatherMiddleware = require('./lib/middleware/weather')
const bodyParser = require("body-parser")
const multiparty = require('multiparty')

const song = require('./lib/song')

const app = express()

app.engine('handlebars',expressHandlebars.engine({
        defaultLayout: 'main',
        helpers:{
            section: function(name, options)
            {
                if(!this._sections) this._sections = {}
                this._sections[name] = options.fn(this)
                return null
            },
        },
    }))

app.set('view engine','handlebars')

const port = process.env.port || 3000


app.use(express.static(__dirname + '/public'))
app.use(weatherMiddleware)
app.use*bodyParser.urlencoded({extended:true})
//default path
app.get('/',handlers.home)
//sections test
app.get('/section-test', handlers.sectionTest)
//the about page
app.get('/about',handlers.about)

//handle our newsletter pages 
app.get('/newsletter-signup', handlers.newsletterSignUp)
app.post('/newsletter-signup/process',handlers.newsletterSignUpProcess)
app.get('/newsletter-signup/thank-you',handlers.newsletterSignupThankYou)
//the improved version 
app.get('/newsletter',handlers.newsletter)

//our route for the photo upload 
app.post('/contest/vacation-photo/:year/:month', (req, res) =>
{
    const form = new multiparty.Form() 
    form.parse(req, (err, fields, files) =>
    {
        if(err) return res.status(500).send({error: err.message})
        handlers.vacationPhotoContestProcess(req, res, fields, files)
    })
})
//the route to upload
app.get('/vacation-photo', handlers.vacationPhotoContest)
// custom 404 page
app.use(handlers.notFound)
    // custom 500 page
app.use(handlers.serverError)

/*
app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`)) */

if(require.main === module) 
{
    app.listen(port, () => 
    {
    console.log( `Express started on http://localhost:${port}` +
    '; press Ctrl-C to terminate.' )
    })
} 
else 
{
    module.exports = app
}