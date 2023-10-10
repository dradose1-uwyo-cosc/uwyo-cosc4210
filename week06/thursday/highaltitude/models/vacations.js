const mongoose = require('mongoose')

const vacationSchema = mongoose.Schema(
    {
        name: String,
        slug: String,
        category: String,
        sku: String,
        description: String,
        locations: {
            search: String,
            coordinates: {
                lat: Number,
                long: Number,
            },
        },
        price: Number,
        tags: [String],
        inSeason: Boolean,
        available: Boolean, 
        requiresWaiver: Boolean,
        maximumGuests: Number,
        notes: String,
        packagesSold: Number,
    }
)

const Vacation = mongoose.model('Vacation', vacationSchema)
module.exports = Vacation