//Danny Radosevich
// UWYO COSC 4210
// Application Testing 

songLyrics = ["He always sings raggy music to the cattle as he swings ",
"back and forward in the saddle, on a horse - a pretty good horse!",
"He's got a syncopated gaiter,"," and you ought to hear the meter",
" to the roar of his repeater;",
"how they run - yes run! -", 
"when they hear that he's 'a-comin',",
" cause the western folks all know, ",
"he's a high-falootin', rootin, tootin',",
" son of a gun from ol' Wyoming,",
"Ragtime Cowboy,",
" Talk about your Cowboy,",
" Ragtime Cowboy Joe."]

exports.getSong = () =>{
    return  songLyrics[Math.floor(Math.random()*songLyrics.length)]
}