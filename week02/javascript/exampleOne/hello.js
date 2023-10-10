//Danny Radosevich
//Example One
//COSC4210 UWYO
//Dialog window

var main = function() 
{
    "use strict";

    window.alert("Hello World!");

    setTimeout(function(){
        console.log("this will print after three seconds")
    },3000);
};

$(document).ready(main);