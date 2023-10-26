//Danny Radosevich
//Adv Web Apps
//Lecture 6

import react, {useEffect, useReducer, useState} from "react";

export default function Checkbox()
{
    const [checked, toggle] = useReducer(checked=>!checked, false)

    return(
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked":"not checked"}
        </>
    );
}