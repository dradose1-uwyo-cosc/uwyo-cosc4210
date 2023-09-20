//Danny Radosevich
//Uwyo COSC4210
//Flash Middleware

module.exports = (req,res,next) =>
{
    res.locals.flash = req.session.flash 
    delete req.session.flash 
    next()
}