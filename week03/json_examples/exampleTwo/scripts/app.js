//Danny Radosevich
//Example One
//COSC4210 UWYO
//Dialog window

var main = function() 
{
    "use strict";

    console.log("hello world");

    $.getJSON("https://gist.githubusercontent.com/dradosevich/75c27b8fde5347d04decbc0e14f29951/raw/62392ce31e19c30db247837951b5061d5aef34f4/cosc4210.json",function(card)
    {
        console.log("getting json");
        var $cardP = $("<p>");
        $cardP.text(card.rank+ " of "+ card.suit);
        $("body").append($cardP);
    }); 
    
    $.getJSON("https://gist.githubusercontent.com/dradosevich/689d794bdcd3dafccd9b0d3ebfaa0a32/raw/4ae1508507df36c74c17a104588c85ba6eab11ad/cosc4210-hand.json",function(hand)
    {
        console.log("appending hand");
        var $list = $("<ul>");
        
        hand.forEach(function(card)
        {
            console.log(card.rank+" of "+card.suit);   
            var $card = $("<li>");
            $card.text(card.rank+" of "+card.suit);
            $list.append($card);
        });
        $("body").append($list);
    });

};

$(document).ready(main);