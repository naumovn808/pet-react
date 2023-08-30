import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className='nav__list'>
                <li className={classes.nav__item}><NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.nav__link }>Profile</NavLink></li>
                <li className={classes.nav__item}><NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.nav__link }>Messages</NavLink></li>
                <li className={classes.nav__item}><NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.nav__link }>News</NavLink></li>
                <li className={classes.nav__item}><NavLink to='Music' className = { navData => navData.isActive ? classes.active : classes.nav__link }>Music</NavLink></li>
                <li className={classes.nav__item}><NavLink to='Settings' className = { navData => navData.isActive ? classes.active : classes.nav__link }>Settings</NavLink></li>
            </ul>
        </nav>
    )
}