//Danny Radosevich
// UWYO COSC 4210
// Application Testing 

const song = require("./song")


exports.home = (req, res) => res.render('home')

exports.about = (req, res) =>
res.render('about', {song: song.getSong()})

exports.notFound = (req, res) => res.render('404')
exports.serverError = (err, req, res, next) => res.render('500')