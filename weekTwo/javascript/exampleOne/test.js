var main = function()
{
    "use static";
    var $content = $("<div>Hello World!</dive").hide();
    var $morecontent = $("<div.Goodbye</div>").hide()
    //append content to body
    $("body").append($content)

    //slide the content down for 2 seconds
    //and then execute a callback
    //the callback contains the second content
    $content.slideDown(2000,function()
    {
        $("body").append($morecontent)
        $morecontent.fadeIn()
    });
}

var message = "hello";
var count = 1;

var add = function(num1, num2)
{
    return num1 + num2
}

for(num =0; num<=100; num = num+1)
{
    console.log(num)
}

var greet = ["hi","hello","howdy"]

greet.forEach(function(element)
{
    console.log(element)
})