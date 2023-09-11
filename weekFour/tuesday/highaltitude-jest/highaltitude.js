//Danny Radosevich
//UWYO COSC4210
//Getting Started with Express
//Initial Steps


const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

const song = require('./lib/song')

const app = express()

app.engine('handlebars',expressHandlebars.engine({
        defaultLayout: 'main',
    }))

app.set('view engine','handlebars')

const port = process.env.port || 3000


app.use(express.static(__dirname + '/public'))

//default path
app.get('/',handlers.home)

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