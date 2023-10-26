//Danny Radosevich
//Adv Web Apps
//Lecture 6

import React, { useEffect } from "react";
import useAnyKeyToRender from "./useAnyKeyToRender";

function WordCount({children=""})
{
    useAnyKeyToRender();

    const words = children.split(" ")
    useEffect(()=>
    {
        console.log("fresh render")
    },[words])

    return(
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length}- words</strong>
            </p>
        </>
    )
}

export default WordCount;