//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

import React from "react";

export default function Ingredient({amount, measurement, name})
{
    return(
        <li>
            {amount} {measurement} {name}
        </li>
    );
}