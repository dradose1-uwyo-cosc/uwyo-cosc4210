//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

import React from "react";
import Recipe from "./Recipe";

export function Menu ({recipes})
{
    return(
        <article>
            <header>
                <h1>Recipes</h1>
            </header>
            <div className="recipes">
                {
                    recipes.map((recipe,i)=>
                    (
                        <Recipe key ={i} {...recipe}/>
                    ))
                }
            </div>
        </article>
    );
}

