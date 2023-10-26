//Danny Radosevich
//Adv Web Apps
//Lecture 6

import React from "react";

import {useNews} from useNews;

export default function Newsfeed({url})
{
    const posts = useNews();

    return(
        <>
            <h1>{posts.length} Articles</h1>
            {posts.map(post=> 
                (
                    <Post key={key.id} {...post}/>
                ))}
        </>
    )
}