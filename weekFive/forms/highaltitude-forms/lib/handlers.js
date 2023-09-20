//Danny Radosevich
// UWYO COSC 4210
// Application Testing 

const song = require("./song")
const weather = require("./middleware/weather")


exports.home = async (req, res) =>
{

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
exports.vacationPhotoContestProcess = (req, res, fields, files) =>
{
    console.log('field data: ', fields)
    console.log('files: ', files)
    res.redirect(303, 'vacation-photo-thank-you')
}

exports.sectionTest = (req, res) => res.render('section-test')

exports.about = (req, res) =>
res.render('about', {song: song.getSong()})

exports.notFound = (req, res) => res.render('404')
exports.serverError = (err, req, res, next) => res.render('500')

