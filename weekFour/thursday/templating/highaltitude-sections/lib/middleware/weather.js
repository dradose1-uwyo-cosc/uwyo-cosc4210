//Danny Radosevich
//UWYO COSC 4210
//Get a weather forecast

const getWeatherData = () =>
{
    
    return fetch('https://api.weather.gov/gridpoints/CYS/84,23/forecast')
    .then(response =>
        {
            //console.log("fetch")
            return response.json()
        }).then(resp =>
        {
            //propkey = Object.keys(resp)[3]
            //console.log(resp.properties.periods)
            //let results = JSON.parse(resp)
            //console.log(results)
            //console.log(resp.properties.periods)
            return resp.properties.periods
        })
}

const fakeGetWeatherData = () =>
[
    {
      "number": 1,
      "name": "Today",
      "startTime": "2023-09-15T10:00:00-06:00",
      "endTime": "2023-09-15T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 62,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 5
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 77
      },
      "windSpeed": "5 to 10 mph",
      "windDirection": "NE",
      "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
      "shortForecast": "Mostly Sunny",
      "detailedForecast": "Mostly sunny, with a high near 62. Northeast wind 5 to 10 mph."
    },
    {
      "number": 2,
      "name": "Tonight",
      "startTime": "2023-09-15T18:00:00-06:00",
      "endTime": "2023-09-16T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 35,
      "temperatureUnit": "F",
      "temperatureTrend": "rising",
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 2.7777777777777777
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 90
      },
      "windSpeed": "5 to 10 mph",
      "windDirection": "SSE",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear then Areas Of Frost",
      "detailedForecast": "Areas of frost after 5am. Mostly clear. Low around 35, with temperatures rising to around 37 overnight. South southeast wind 5 to 10 mph."
    },
    {
      "number": 3,
      "name": "Saturday",
      "startTime": "2023-09-16T06:00:00-06:00",
      "endTime": "2023-09-16T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 71,
      "temperatureUnit": "F",
      "temperatureTrend": "falling",
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 91
      },
      "windSpeed": "5 to 10 mph",
      "windDirection": "WNW",
      "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
      "shortForecast": "Areas Of Frost then Sunny",
      "detailedForecast": "Areas of frost before 8am. Sunny. High near 71, with temperatures falling to around 68 in the afternoon. West northwest wind 5 to 10 mph."
    },
    {
      "number": 4,
      "name": "Saturday Night",
      "startTime": "2023-09-16T18:00:00-06:00",
      "endTime": "2023-09-17T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 39,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": -1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 63
      },
      "windSpeed": "5 to 10 mph",
      "windDirection": "SSE",
      "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
      "shortForecast": "Clear",
      "detailedForecast": "Clear, with a low around 39. South southeast wind 5 to 10 mph."
    },
    {
      "number": 5,
      "name": "Sunday",
      "startTime": "2023-09-17T06:00:00-06:00",
      "endTime": "2023-09-17T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 75,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": -1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 64
      },
      "windSpeed": "5 to 15 mph",
      "windDirection": "WSW",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "shortForecast": "Sunny",
      "detailedForecast": "Sunny, with a high near 75. West southwest wind 5 to 15 mph."
    },
    {
      "number": 6,
      "name": "Sunday Night",
      "startTime": "2023-09-17T18:00:00-06:00",
      "endTime": "2023-09-18T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 41,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": -1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 55
      },
      "windSpeed": "5 to 15 mph",
      "windDirection": "WSW",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 41."
    },
    {
      "number": 7,
      "name": "Monday",
      "startTime": "2023-09-18T06:00:00-06:00",
      "endTime": "2023-09-18T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 74,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": -1.6666666666666667
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 56
      },
      "windSpeed": "10 to 20 mph",
      "windDirection": "WSW",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "shortForecast": "Sunny",
      "detailedForecast": "Sunny, with a high near 74."
    },
    {
      "number": 8,
      "name": "Monday Night",
      "startTime": "2023-09-18T18:00:00-06:00",
      "endTime": "2023-09-19T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 43,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": -1.6666666666666667
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 54
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "W",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 43."
    },
    {
      "number": 9,
      "name": "Tuesday",
      "startTime": "2023-09-19T06:00:00-06:00",
      "endTime": "2023-09-19T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 73,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 0
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 58
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "WSW",
      "icon": "https://api.weather.gov/icons/land/day/sct/rain_showers?size=medium",
      "shortForecast": "Mostly Sunny then Slight Chance Rain Showers",
      "detailedForecast": "A slight chance of rain showers after noon. Mostly sunny, with a high near 73."
    },
    {
      "number": 10,
      "name": "Tuesday Night",
      "startTime": "2023-09-19T18:00:00-06:00",
      "endTime": "2023-09-20T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 43,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 64
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "SW",
      "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
      "shortForecast": "Partly Cloudy",
      "detailedForecast": "Partly cloudy, with a low around 43."
    },
    {
      "number": 11,
      "name": "Wednesday",
      "startTime": "2023-09-20T06:00:00-06:00",
      "endTime": "2023-09-20T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 71,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.6666666666666667
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 66
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "SW",
      "icon": "https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium",
      "shortForecast": "Mostly Sunny then Chance Showers And Thunderstorms",
      "detailedForecast": "A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 71."
    },
    {
      "number": 12,
      "name": "Wednesday Night",
      "startTime": "2023-09-20T18:00:00-06:00",
      "endTime": "2023-09-21T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 42,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.6666666666666667
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 66
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/night/rain_showers/sct?size=medium",
      "shortForecast": "Slight Chance Rain Showers then Partly Cloudy",
      "detailedForecast": "A slight chance of rain showers before midnight. Partly cloudy, with a low around 42."
    },
    {
      "number": 13,
      "name": "Thursday",
      "startTime": "2023-09-21T06:00:00-06:00",
      "endTime": "2023-09-21T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 65,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 69
      },
      "windSpeed": "10 to 20 mph",
      "windDirection": "SW",
      "icon": "https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium",
      "shortForecast": "Mostly Sunny then Chance Showers And Thunderstorms",
      "detailedForecast": "A chance of showers and thunderstorms after noon. Mostly sunny, with a high near 65."
    },
    {
      "number": 14,
      "name": "Thursday Night",
      "startTime": "2023-09-21T18:00:00-06:00",
      "endTime": "2023-09-22T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 37,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "dewpoint": {
        "unitCode": "wmoUnit:degC",
        "value": 1.1111111111111112
      },
      "relativeHumidity": {
        "unitCode": "wmoUnit:percent",
        "value": 74
      },
      "windSpeed": "10 to 20 mph",
      "windDirection": "WNW",
      "icon": "https://api.weather.gov/icons/land/night/rain_showers?size=medium",
      "shortForecast": "Chance Rain Showers",
      "detailedForecast": "A chance of rain showers. Partly cloudy, with a low around 37."
    }
  ]

const weatherMiddleware =  async (req, res, next) =>
{
    console.log("middleware")
    if(!res.locals.partials) res.locals.partials = {}
    res.locals.partials.weatherContext = fakeGetWeatherData()
    /*getWeatherData().then( resp =>{
        
        res.locals.partials.weatherContext = resp
        //console.log(res.locals.partials.weatherContext)
    }) */
    
    next()
}

module.exports = weatherMiddleware