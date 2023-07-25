import React from 'react';

export default function Navbar() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li><a href='#' className='nav__link'>Profile</a></li>
                <li><a href='#' className='nav__link'>Messages</a></li>
                <li><a href='#' className='nav__link'>News</a></li>
                <li><a href='#' className='nav__link'>Music</a></li>
                <li><a href='#' className='nav__link'>Settings</a></li>
            </ul>
        </nav>
    )
}