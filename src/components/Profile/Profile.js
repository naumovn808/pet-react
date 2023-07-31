import React from "react";
import mainImg from "../../images/main.jpg";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return (
        <main className={classes.main__content}>

            <div>

                <img alt='main-pic.' src={mainImg} className={classes.main__img}></img>

            </div>

            <div className={classes.main__item}>
                avatar + description
            </div>

            <MyPosts />

        </main>
    )
}