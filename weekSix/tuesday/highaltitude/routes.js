//Danny Radosevich
//The routing of the application pulled out of the main file 


//imports 
const handlers = require('./lib/handlers') 
const multiparty = require('multiparty')
module.exports = app =>
{
    //default path
    app.get('/',handlers.home)
    //sections test
    app.get('/section-test', handlers.sectionTest)
    //the about page
    app.get('/about',handlers.about)

    //handle our newsletter pages 
    app.get('/newsletter-signup', handlers.newsletterSignUp)
    app.post('/newsletter-signup/process',handlers.newsletterSignUpProcess)
    app.get('/newsletter-signup/thank-you',handlers.newsletterSignupThankYou)
    //the improved version 
    app.get('/newsletter',handlers.newsletter)

    //our route for the photo upload 
    app.post('/contest/vacation-photo/:year/:month', (req, res) =>
    {
        console.log("processing form")
        const form = new multiparty.Form() 
        console.log("after form creation")
        form.parse(req, (err, fields, files) =>
        {
            if(err)
            {
                console.log(err)
                return res.status(500).send({error: err.message})
                
            } 
            handlers.vacationPhotoContestProcess(req, res, fields, files)
        })
    })
    app.post('/api/vacation-photo/:year/:month', (req, res) =>
    {
        const form = new multiparty.Form() 
        form.parse(req, (err, fields, files) =>
        {
            if(err) return res.status(500).send({error: err.message})
            handlers.api.vacationPhotoContest(req, res, fields, files)
        })
    })
    //the route to upload
    app.get('/vacation-photo', handlers.vacationPhotoContest)
    //a thank you 
    app.get('/vacation-photo-thank-you', handlers.vacaThankYou)

    //vacations page
    app.get('/vacations', handlers.listVacations)
    app.get('/notify-me-when-in-season', handlers.notifyWhenInSeason)
    app.post('/notify-me-when-in-season', handlers.notifyWhenInSeasonProcess)

    //API routes 
    app.get('/api/vacations',handlers.getVacationsAPI)
    app.get('api/vacation/:sku', handlers.getVacationBySkuAPI)
    app.post('/api/vacation/:sku/notify-when-in-season',
        handlers.addVacationInSeasonListenerAPI)

    // custom 404 page
    app.use(handlers.notFound)
        // custom 500 page
    app.use(handlers.serverError)
}