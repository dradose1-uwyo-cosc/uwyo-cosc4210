//Danny Radosevich
// UWYO COSC 4210
// Application Testing 

const song = require("./song")
const weather = require("./weather")
const fs = require('fs')
const pathUtils = require('path')
const db = require("../db")
const credentials = require("../credentials.dev.json")
const {apikey} = credentials.google

exports.api = {}

//set up storage for the photos
const dataDir = pathUtils.resolve(__dirname,"..","data")
const vacationPhotosDir = pathUtils.join(dataDir,'vacation-photos')
if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
if(!fs.existsSync(vacationPhotosDir)) fs.mkdirSync(vacationPhotosDir)

function saveContestEntry(contestName, email, year, month, photoPath)
{

}

const {promisify} = require('util')
const mkdir = promisify(fs.mkdir)
const rename = promisify(fs.rename)

exports.api.vacationPhotoContest = async (req, res, fields, files) =>
{
    const photo = files.photo[0]
    const dir = vacationPhotosDir + '/' + Date.now() 
    const path = dir + '/' + photo.originalFilename
    await mkdir(dir)
    await rename(photo.path, path)
    saveContestEntry('vacation-photo', fields.email, req.params.year, req.params.month, path)
    res.send({result:'success'})
}

exports.home = async (req, res) =>
{
    //await weather.weather(res)
    res.render('home')
} 

exports.newsletterSignUp = (req,res) => 
{
    //we'll talk about crsf later
    res.render('newsletter-signup',{csrf:'token here'})
}
exports.newsletterSignUpProcess = (req,res) =>
{
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you')
}
exports.newsletterSignupThankYou = (req, res) =>
res.render('newsletter-signup-thank-you')

//improved version of the newsletter signing 
exports.newsletter = (req,res) =>
{
    res.render('newsletter', { csrf: 'CSRF token goes here' })
}
//and the corresponding API 
exports.api = {
    newsletterSignUp: (req,res) =>
    {
        console.log('Form (from querystring): ' + req.query.form)
        console.log('CSRF token (from hidden form field): ' + req.body._csrf)
        console.log('Name (from visible form field): ' + req.body.name)
        console.log('Email (from visible form field): ' + req.body.email)
        res.send({result: 'success'})
    }
}

//now the photo contest 
exports.vacationPhotoContest = (req, res) => {
    const now = new Date()
    res.render('vaca-photos', { year: now.getFullYear(), month: now.getMonth() })
  }
exports.vacationPhotoContestProcess = async (req, res, fields, files) =>
{

    console.log('field data: ', fields)
    console.log('files: ', files)
    const photo = files.photo[0]
    const dir = vacationPhotosDir + '/' + Date.now() 
    const path = dir + '/' + photo.originalFilename
    await mkdir(dir)
    await rename(photo.path, path)
    saveContestEntry('vacation-photo', fields.email, req.params.year, req.params.month, path)
    res.redirect(303, '/vacation-photo-thank-you')
}

exports.vacaThankYou= (req,res) => res.render('vacation-photo-thank-you')

exports.sectionTest = (req, res) => res.render('section-test')

exports.about = (req, res) =>
res.render('about', {song: song.getSong()})

exports.notFound = (req, res) => res.render('404')
exports.serverError = (err, req, res, next) => res.render('500')


//add one to display vacations 
exports.listVacations = async(req,res)=>
{
    const vacations = await db.getVacations({available: true})
    const context = {
        vacations: vacations.map(vacation => (
            {
                sku: vacation.sku,
                name: vacation.name,
                description: vacation.description, 
                price: '$' + vacation.price.toFixed(2),
                inSeason: vacation.inSeason,
            }
        ))
    }
    res.render('vacations', context)
}

//handle signing up for the notifications
exports.notifyWhenInSeason = (req, res) =>
res.render('notify-when-in-season',{sku:req.query.sku})

exports.notifyWhenInSeasonProcess = async (req, res) =>
{
    console.log(req.body)
    const {email, sku} = req.body
    await db.addVacationInSeasonListener(email,sku)
    return res.redirect(303,'/vacations')
}

//section for APIs

//list all available vacations 
exports.getVacationsAPI = async (req,res) =>
{
    const vacations = await db.getVacations({available:true})
    res.json(vacations)
}
//get a vacation by its sku 
exports.getVacationBySkuAPI = async (req, res) =>
{
    const vacation = await db.getVacationBySku(req.params.sku)
    res.json(vacation)
}
//add a vacation in season listener 
exports.addVacationInSeasonListenerAPI = async (req, res) =>
{
    await db.addVacationInSeasonListener(req.params.sku, req.body.email)
    res.json({message:'success'})
}

//return the map view
exports.maps = async (reg, res) =>
{
    console.log(apikey)
    res.render('map',{googleApiKey:apikey})
}