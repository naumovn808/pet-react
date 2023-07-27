import React from 'react';
import images from "../images/yappi.png";
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <img alt="logotype." src={images} width={50} height={50} />
        </header>
    )
}