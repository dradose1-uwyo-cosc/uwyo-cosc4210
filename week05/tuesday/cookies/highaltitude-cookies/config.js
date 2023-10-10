const env = process.env.NDOE_ENV || 'development'
const credentials = require(`./.credentials.${env}`)
module.exports = {credentials}