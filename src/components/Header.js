import React from 'react';
import images from "../images/yappi.png";

export default function Header() {
    return (
        <header className='header'>
            <img alt="logotype." src={images} width={50} height={50} />
        </header>
    )
}