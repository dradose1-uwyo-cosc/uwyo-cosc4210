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
const routes = require("./routes")
const cors = require('cors')

const db = require("./db.js")

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
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

routes(app)
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