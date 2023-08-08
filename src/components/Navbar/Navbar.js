import React from 'react';
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className='nav__list'>
                <li className={classes.nav__item}><a href='/profile' className={classes.nav__link}>Profile</a></li>
                <li className={classes.nav__item}><a href='/dialogs' className={classes.nav__link}>Messages</a></li>
                <li className={classes.nav__item}><a href='/news' className={classes.nav__link}>News</a></li>
                <li className={classes.nav__item}><a href='Music' className={classes.nav__link}>Music</a></li>
                <li className={classes.nav__item}><a href='Settings' className={classes.nav__link}>Settings</a></li>
            </ul>
        </nav>
    )
}