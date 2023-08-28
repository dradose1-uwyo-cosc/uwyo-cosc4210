//Danny Radosevich
//Example One
//COSC4210 UWYO
//Dialog window

var main = function() 
{
    "use strict";
    console.log("hi")
    //get the button press information and append the json
    $(".my-input input").val("")
    $(".my-input button").on("click",function(event)
    {
        console.log("Made it")
        let json_url = $(".my-input input").val();
        $(".my-input input").val("")
        //now we actually get the json and iterate through
        $.getJSON(json_url, function(hand)
        {
            
            
            hand.forEach(function(card)
            {
                /*
                console.log(card.rank+" of "+card.suit);   
                var $card = $("<li>");
                $card.text(card.rank+" of "+card.suit);
                $list.append($card);*/ 
                var $p_body = $("<p>")
                var $list = $("<ul>");
                for (const[key,value] of Object.entries(card))
                {
                    var $card = $("<li>");
                    $card.text(key+":"+value);
                    $list.append($card);
                }
                $p_body.append($list)
                $("body").append($p_body)
            });
            //$("body").append($list);
        });
        console.log(json_url);
    });

    

};

$(document).ready(main);