//Danny Radosevich
//Adv Web App Lecture 4
//Color organizer

import React, {useState} from "react";
import Color from "./Colors";

export default function ColorList(
    {colors = [], 
        onRemoveColor = f=>f, 
        onRateColor = f => f})
{
    if(!colors.length) return <div>No Colors Listed</div>
    return(
        <div>
            {
                colors.map(color => <Color key={color.id}{...color} 
                    onRemove={onRemoveColor}
                    onRate={onRateColor}/>)
            }
        </div>
    );
}