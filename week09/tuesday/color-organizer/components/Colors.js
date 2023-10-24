//Danny Radosevich
//Adv Web App Lecture 4
//Color organizer

import React, {useState} from "react";
import StarRating from "./StarRating";
import {VscTrash} from "react-icons/vsc"


export default function Color(
    {id,
        title,
        color,
        rating, 
        onRemove = f => f,
        onRate = f => f})
{
    return(
        <section>
            <h1>{title}</h1>
            <button onClick = 
            {
                () => onRemove(id)
            }>
                <VscTrash/>
            </button>
            <div style={{height:50,backgroundColor:color}}/>
            <StarRating 
                selectedStars={rating}
                onRate={rating=>onRate(id,rating)}/>
        </section>
    );
}