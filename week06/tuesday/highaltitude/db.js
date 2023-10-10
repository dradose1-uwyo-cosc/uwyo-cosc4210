//Danny Radosevich
// UWYO-COSC4210

const mongoose = require('mongoose')
const mongoDB = require('mongodb')
const credentials = require("./credentials.dev.json")
const {connectionString } = credentials.mongo
const Vacation = require("./models/vacations")
const VacationInSeasonListener = require('./models/vacationInSeasonListener')

//check to ensure the connection string is present
if(!connectionString)
{
    console.error('Connection string missing')
    process.exit(1)
}

//connect to the DB
mongoose.connect(connectionString)
const db = mongoose.connection
db.on('error', err => {
        console.error('MongoDB err: ' + err.message)
        process.exit(1)
    })

db.once('open', () => console.log('MongoDB connection established'))

module.exports = {
    getVacations : async (options = {}) =>
    {
        return Vacation.find(options)
    },
    addVacationInSeasonListener: async(email, sku) =>
    {
        await VacationInSeasonListener.updateOne(
            {email},
            {$push: {skus:sku}},
            {upsert:true}
        )
    },
    getVacationBySku : async (sku) =>
    {
        return Vacation.find({sku:sku})
    }
}

async function main()
{
    const vacations = await Vacation.find() 

    if(vacations.length==0)
    {
        new Vacation({
            name: 'Snake River Trip',
            slug: 'snake-river-day-trip',
            category: 'Day Trip',
            sku: 'HR199',
            description: 'Spend a day rafting on the snake river' + 
            'and finish with enjoying craft beers in Snake River!',
            price: 99.95,
            tags: ['day trip', 'snake river', 'rafting', 'kayaking', 'breweries'],
            inSeason: true,
            maximumGuests: 16,
            available: true,
            packagesSold: 0,
        }).save()
        
        new Vacation({
            name: 'Yellowstone Getaway',
            slug: 'yellowstone-getaway',
            category: 'Weekend Getaway',
            sku: 'OC39',
            description: 'Enjoy the World Renowned Yellowstone National Park!',
            price: 269.95,
            tags: ['weekend getaway', 'yellowstone', 'geysers','wildlife'],
            inSeason: false,
            maximumGuests: 8,
            available: true,
            packagesSold: 0,
        }).save()
        
        new Vacation({
            name: 'Rock Climbing in Vedauwoo',
            slug: 'rock-climbing-in-vedauwoo',
            category: 'Adventure',
            sku: 'B99',
            description: 'Experience the thrill of climbing just outside of Laramie',
            price: 289.95,
            tags: ['weekend getaway', 'vedauwoo', 'high desert', 'rock climbing'],
            inSeason: true,
            requiresWaiver: true,
            maximumGuests: 4,
            available: true,
            packagesSold: 0,
            notes: '',
        }).save()    
    }
}

main()