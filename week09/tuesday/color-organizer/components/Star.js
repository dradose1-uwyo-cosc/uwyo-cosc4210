//Danny Radosevich
//Adv Web Apps
// recipe-app with states

import React from "react";
import {VscStarFull} from "react-icons/vsc";


const Star=({selected=false, onSelect = f => f})=>
(
    <VscStarFull color={selected? "#ffc425":"gray" } onClick={onSelect}/>
);

export default Star;