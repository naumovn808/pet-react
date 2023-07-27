import React from "react";
import mainImg from "../images/main.jpg";
import classes from './Profile.module.css';

export default function Profile() {
    return (
        <main className={classes.main__content}>

            <div>

                <img alt='main-pic.' src={mainImg}></img>

            </div>

            <div className={classes.main__item}>
                avatar + description
            </div>

            <div className={classes.main__item}>
                my post
                <div>
                    post

                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>

        </main>
    )
}