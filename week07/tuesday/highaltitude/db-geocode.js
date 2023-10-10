const db = require('./db')
const geocode = require('./lib/geocode')

const geocodeVacations = async () => 
{
    const vacations = await db.getVacations()
    const vacationsWoCoords = vacations.filter(({location})=>
    {
        !location.coordinates || typeof location.coordinates.lat !== 'number'
    })
    console.log`geocoding ${vacationsWoCoords.length} of ${vacations.length} vacations:`

    return Promise.all(vacationsWoCoords.map(async ({sku, location})=>
    {
        const {search} = location 
        if(typeof search !== 'string' || !/\w/.test(search))
        {
            return console.log(` SKU ${sku} FAILED: does not have location.search`)
        }
        try
        {
            const coordinates = await geocode(search)
            await db.updateVacationBySKU(sku, {location: {search,coordinates}})
            console.log(` SKU ${sku} SUCCEEDED: ${coordinates.lat}, ${coordinates.lng}`)
        }
        catch(err)
        {
            return console.log(` SKU ${sku} failed ${err.message}`)
        }
    }))
}

geocodeVacations().then(() =>
{
    console.log('DONE')
    db.close()
}).catch(err =>
    {
        console.error(`ERROR: ${err.message}`)
        db.close()
    })