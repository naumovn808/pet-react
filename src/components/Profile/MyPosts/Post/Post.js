import React from "react";
import classes from './Post.module.css';
import avatar from '../../../../images/avatar.png'

export default function Post() {
    return (

        <div className={classes.item}>
            <img alt="avatar" src={avatar} className={classes.img} />
            post1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}