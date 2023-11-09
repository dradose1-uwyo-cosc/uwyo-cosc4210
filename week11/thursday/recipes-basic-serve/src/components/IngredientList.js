//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

import React from "react";
import Ingredient from "./Ingredients";

export default function IngredientList({list})
{
    return(
        <ul className="ingredients">
            {
                list.map((ingredient,i)=>
                (
                    <Ingredient key={i} {...ingredient}/>
                ))
                
            }
        </ul>
    );
}