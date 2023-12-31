//Danny Radosevich
//Uwyo COSC4210 
// React Routing
// Based on "Learning React Modern Patterns for Developing React Apps" by Porcello and Banks


import React from "react"
import {Outlet, useLocation} from "react-router-dom"
import {Link} from "react-router-dom"

export function Home()
{
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">|About|</Link>
                <Link to="events">Events|</Link>
                <Link to="products">Products|</Link>
                <Link to="contact">Contact|</Link>
            </nav>
        </div>
    )
}

export function About() 
{
    return(
        <div>
            <h1>[About]</h1>
            <Outlet/>
        </div>
    ) 
}

export function Events() 
{
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    ) 
}

export function Products() 
{
    return(
        <div>
            <h1>[Products]</h1>
        </div>
    ) 
}

export function Contact() 
{
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    ) 
}

export function Services()
{
    return(
    <section>
        <h2>Services</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed
        nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper
        porta. Mauris massa. Vestibulum lacinia arcu
        eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula
        in libero.
        </p>
    </section>
    )
}

export function  Whoops404()
{
    let location = useLocation()
    console.log(location)
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}