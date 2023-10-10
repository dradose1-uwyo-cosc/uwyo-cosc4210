//Danny Radosevich
//UWYO COSC 4210
//Get a weather forecast

//./lib/middleware/weather.js
const weather = require("../weather")

const weatherMiddleware =  async (req, res, next) =>
{
    //console.log("middleware")
    if(!res.locals.partials) res.locals.partials = {}
    res.locals.partials.weatherContext = await weather.getWeatherData()
    /*getWeatherData().then( resp =>{
        
        res.locals.partials.weatherContext = resp
        //console.log(res.locals.partials.weatherContext)
    }) */
    
    next()
}

module.exports = weatherMiddleware