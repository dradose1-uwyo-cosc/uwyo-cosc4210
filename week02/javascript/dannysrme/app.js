//Danny Radosevich
//javaScript to improve Dannysrme

var main = function() 
{
    "use strict"; 
    $(".image").on("click",function(event)
    {
        console.log("test")
    })
};
var ragtime = function()
{
    var imgs = ["20210916_124751.jpg","PICT_20220803_224759.JPG","carousel-steamboat.jpg"]
    var ind = Math.floor(Math.random() *3);
    $(".image").attr("src",imgs[ind])

    song = ["He always sings raggy music to the cattle as he swings ",
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
    var $rtime = $(".ragtime")
    console.log("here")
    let index = 0
    setInterval(function()
    {
        console.log(song[index]);
        $rtime.text(song[index]);
        index+=1
        if (index ==song.length)
        {
            index = 0;
        }
    },2000)
    /*
    song.forEach(function(element,i)
    {
          
        setTimeout(function()
        {
            console.log(element);
            $rtime.text(element);
        },i*2050);

    });*/
    //ragtime()
};

$(document).ready(ragtime);