//Danny Radosevich
//AdvWebApps
//ColorRating 

import { useDebugValue, useState } from "react";

export const useInput = initialvalue =>
{
    const [value, setValue] = useState(initialvalue);
    return[
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialvalue)
    ];
}