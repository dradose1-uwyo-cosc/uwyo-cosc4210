//Danny Radosevich
//UWYO COSC4210
//Getting Started with Express
//Initial Steps


const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')
const weatherMiddleware = require('./lib/middleware/weather')

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
//default path
app.get('/',handlers.home)
//sections test
app.get('/section-test', handlers.sectionTest)
//the about page
app.get('/about',handlers.about)

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