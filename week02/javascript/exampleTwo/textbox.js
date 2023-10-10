//Danny Radosevich
//Example One
//COSC4210 UWYO
//Dialog window

var main = function() 
{
    "use strict";
    

    $(".comment-input button").on("click",function(event){
        if ($(".comment-input input").val() !=="")
        {
            var $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
        } 
    });
    
};

$(document).ready(main);