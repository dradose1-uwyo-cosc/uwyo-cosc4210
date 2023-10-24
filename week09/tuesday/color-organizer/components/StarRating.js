//Danny Radosevich
//Adv Web Apps
// recipe-app with states

import Star from "./Star";
import React from "react";

const createArray = length=>[...Array(length)];

export default function StarRating({totalStars=5, selectedStars=0, onRate = f =>f})
{
    return(
        <>
            {
                createArray(totalStars).map((n,i) =>
                <Star key={i} 
                    selected={selectedStars > i}
                    onSelect={()=>onRate(i+1)} 
                />)
            }
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
    
}