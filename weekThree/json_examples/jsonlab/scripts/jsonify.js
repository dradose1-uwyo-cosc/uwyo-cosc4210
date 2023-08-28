//Danny Radosevich
//Example One
//COSC4210 UWYO
//Dialog window

var main = function() 
{
    "use strict";
    console.log("hi")
    //get the button press information and append the json
    $(".key-input").val("")
    $(".val-input").val("")
    $(".my-input button").on("click",function(event)
    {
        console.log("Made it")
        let inputted_key = $(".key-input").val();
        let inputted_val = $(".val-input").val();
        console.log(inputted_key,inputted_val)
        $(".key-input").val("")
        $(".val-input").val("")
        //now we actually get the json and iterate through
        let objout = {inputted_key:inputted_val}

        console.log(JSON.stringify(objout));
    });

    

};

$(document).ready(main);