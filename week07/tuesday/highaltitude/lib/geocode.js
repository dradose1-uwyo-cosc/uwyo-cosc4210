const https = require('https')
const credentials = require("../credentials.dev.json")
const {apikey} = credentials.google

module.exports = async query => 
{
    const options = {
        hostname: 'maps.googleapi.com',
        path: '/maps/api/geocode/json?address='+
        encodeURIComponent(query)+'&key='+
        apikey
    }
}

return new Promise((resolve, reject)=>
{
    https.request(options, res =>
        {
            let data = ''
            res.on('data',chunk => data += chunk)
            res.om('end', ()=>
            {
                data = JSON.parse(data)
                if(!data.results.length)
                {
                    return reject(new Error(`no results "${query}"`))
                }
                resolve(data.results[0].geomerty.location)
            }).end() 
        })
})