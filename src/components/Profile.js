import React from "react";
import mainImg from "../images/main.jpg";

export default function Profile () {
    return (
        <main className='main-content'>

            <div>

                <img alt='main-pic.' src={mainImg}></img>

            </div>

            <div>
                avatar + description
            </div>

            <div>
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