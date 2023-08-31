//Danny Radosevich
//UWYO COSC4210
//Getting Started with Express
//Initial Steps


const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars',expressHandlebars.engine({
        defaultLayout: 'main',
    }))

app.set('view engine','handlebars')

const port = process.env.port || 3000

song = ["He always sings raggy music to the cattle as he swings ",
"back and forward in the saddle, on a horse - a pretty good horse!",
"He's got a syncopated gaiter,"," and you ought to hear the meter",
" to the roar of his repeater;",
"how they run - yes run! -", 
"when they hear that he's 'a-comin',",
" cause the western folks all know, ",
"he's a high-falootin', rootin, tootin',",
" son of a gun from ol' Wyoming,",
"Ragtime Cowboy,",
" Talk about your Cowboy,",
" Ragtime Cowboy Joe."]

app.use(express.static(__dirname + '/public'))

//default path
app.get('/',(req,res) => 
{
    const randLyric = song[Math.floor(Math.random()*song.length)]
    res.render('home',{ragtime:randLyric})
})

//the about apge
app.get('/about',(req,res) => 
{
    res.render('about')
})

// custom 404 page
app.use((req, res) => 
{
    res.status(404)
    res.render('404')
})
    // custom 500 page
app.use((err, req, res, next) => 
{
    console.error(err.message)
    res.status(500)
    res.render('500')
})
app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))