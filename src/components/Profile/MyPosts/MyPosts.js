import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

export default function MyPosts() {
    return (

        <div>
            My posts
            <div>
                new post
            </div>
            <div className={classes.posts}>

                <Post />

            </div>
        </div>


    )
}