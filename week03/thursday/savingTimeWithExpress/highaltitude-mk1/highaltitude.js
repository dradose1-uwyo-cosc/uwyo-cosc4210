//Danny Radosevich
//UWYO COSC4210
//Getting Started with Express
//Initial Steps


const express = require('express')

const app = express()

const port = process.env.port || 3000

//default path
app.get('/',(req,res) => 
{
    res.type('text/plain')
    res.send('High Altitude Travel')
})

//the about apge
app.get('/about',(req,res) => 
{
    res.type('text/plain')
    res.send('About High Altitude Travel')
})

// custom 404 page
app.use((req, res) => 
{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})
    // custom 500 page
app.use((err, req, res, next) => 
{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})
app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))