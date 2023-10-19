//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

import React from "react";
import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

function Recipe({name, ingredients,steps})
{
    return(
        <section id={name.toLowerCase().replace(/ /g,"-")}>
            <h1>{name}</h1>
            <IngredientList list = {ingredients}/>
            <Instructions title = "Cooking instructions" steps ={steps}/>
        </section>
    );
}
export default Recipe;