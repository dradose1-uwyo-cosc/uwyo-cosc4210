//Danny Radosevich
//Uwyo COSC4210 
// React Routing
// Based on "Learning React Modern Patterns for Developing React Apps" by Porcello and Banks

import React from "react"

import {useRoutes} from "react-router-dom"

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
    return  useRoutes([
        { path: "/", element: <Home /> },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "services",
              element: <Services />
            }
          ]
        },
        { path: "events", element: <Events /> },
        { path: "products", element: <Products /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Whoops404 /> },
        {
          path: "services",
          redirectTo: "about/services"
        }
      ]);
}