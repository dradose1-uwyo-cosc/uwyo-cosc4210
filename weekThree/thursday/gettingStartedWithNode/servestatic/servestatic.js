//Danny Radosevich
//UWYO COSC4210
//Getting Started with Node
//Routing 

//first import what we need
const http = require('http')
const fs = require("fs")
//set our port
const port = process.env.PORT || 3000

//create a helper function to deal with the files
function serverStaticFiles(res, path, contentType, responseCode = 200)
{
    fs.readFileSync(__dirname+path,(err, data) =>
    {
        if(err)
        {
            res.writeHead(500,{'Content-Type':'text/plain'})
            return res.end('500- Internal error')
        }
        res.writeHead(responseCode, {'Content-Type':contentType})
        res.ed(data)
    })
}

//our server function 
const server = http.createServer((req, res) => 
{
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path)
    {
        case '':
            serverStaticFiles(res,'/public/home.html','text/html')
            break 
        case '/about':
            serverStaticFiles(res,'/public/about.html','text/html')
            break
        case '/img/logo.png': 
            serverStaticFiles(res,'/public/home.html','text/html')
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