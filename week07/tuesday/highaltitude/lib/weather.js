//Danny Radosevich
// weather.js, but different than the middleware version! 


function Cache() {
    this.data = null
    this.update = null
  }

let weatherCache = new Cache()
//./lib/weather.js
exports.getWeatherData = async (res) =>
{
    console.log((Date.now() - weatherCache.update))   
    if (weatherCache.data == null || (Date.now() - weatherCache.update)>300000)
    {
        console.log("fetching new data")
        return fetch('https://api.weather.gov/gridpoints/CYS/84,23/forecast')
        .then(response =>
            {
                //console.log("fetch")
                return response.json()
            }).then(resp =>
            {
                weatherCache.data = resp.properties.periods 
                weatherCache.update = Date.now()
                return resp.properties.periods
            })
    }
    else 
    {
        console.log('returning cached data')
        return weatherCache.data
    }
}


exports.weather = async (res) => 
{
    await getWeatherData()
}