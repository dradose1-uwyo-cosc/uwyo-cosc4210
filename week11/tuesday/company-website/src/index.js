//Danny Radosevich
//Uwyo COSC4210 
// React Routing
// Based on "Learning React Modern Patterns for Developing React Apps" by Porcello and Banks

import React from "react";
import {render} from "react-dom";
import {App} from "./App";

import {BrowserRouter as Router} from "react-router-dom"

render(<Router> <App/> </Router>, document.getElementById("root"))