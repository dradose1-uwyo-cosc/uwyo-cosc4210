//Danny Radosevich
//Uwyo COSC4210 
// React Routing
// Based on "Learning React Modern Patterns for Developing React Apps" by Porcello and Banks

import React from "react"

import {Routes, Route, Redirect} from "react-router-dom"

import {
    Home,
    About,
    Events,
    Products,
    Contact,
    Services,
    Whoops404
} from "./pages"

export function App() 
{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} >
                <Route path="services" element={<Services/>} />
                </Route>
                <Route path="/events" element={<Events/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Whoops404/>}/>
            </Routes>
        </div>
    )
}