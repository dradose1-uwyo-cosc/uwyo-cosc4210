//Danny Radosevich
//Adv Web Apps
//Lecture 6

import React, {useEffect, useState} from "react";

const useAnyKeyToRender=() =>
{
    const[,forceRender] = useState();

    useEffect(()=>
    {
        window.addEventListener("keydown",forceRender);
        return () => window.removeEventListener("keydown",forceRender)
    },[]);
};

export default useAnyKeyToRender();