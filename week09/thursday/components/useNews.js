//Danny Radosevich
//Adv Web Apps
//Lecture 6


import React, {useEffect, useMemo, useState} from "react";

const useNews = () =>
{
    const [_posts, setPosts] = useState([]);
    const addPost = post => setPosts(allPosts=>[post,...allPosts]);

    const posts = useMemo(()=>_posts, [_posts]);

    useEffect(()=>
    {
        newPostChime.play();
    },[posts])
    useEffect(()=>
    {
        newsFeed.subscribe(addPost);
        return () => newsFeed.ubsubscribe(addPost);
    },[]);
    useEffect(()=>
    {
        welcomeChime.play();
        return () => goodbyeChime.play();
    },[]);

    return posts;
}