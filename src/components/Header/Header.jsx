import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Header.module.css';
import logo from './images/logo.png';


const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            
            <NavLink to ={'/login'}>LOGIN</NavLink>
}
        </div>
    </header>
}

export default Header;