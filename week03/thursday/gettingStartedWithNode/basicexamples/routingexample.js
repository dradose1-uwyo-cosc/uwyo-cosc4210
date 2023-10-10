//Danny Radosevich
//UWYO COSC4210
//Getting Started with Node
//Routing 

//first import what we need
const http = require('http')
//set our port
const port = process.env.PORT || 3000

//our server function 
const server = http.createServer((req, res) => 
{
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path)
    {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Homepage')
            break 
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Homepage')
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Not Found')
            break
    }

})

//have teh server listen for a request, log the port
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))