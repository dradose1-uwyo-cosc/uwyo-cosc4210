//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

import React from "react";
import {render} from "react-dom";
import Menu from "../components/Menu";
import data from "./data/recipes.json";

render(<Menu recipes={data}/>,document.getElementById("root"))