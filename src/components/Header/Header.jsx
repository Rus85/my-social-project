import React from 'react';
import s from  './Header.module.css';
import logo from './images/logo.png';

const Header = () => {
    return <header className={s.header}>
        <img src={logo} />
    </header>
}

export default Header;