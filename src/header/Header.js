import React from 'react';
import style from './Header.module.css';
import Nav from '../nav/Nav';


const Header = () => {
    return (
        <div className={style.headerBlock}>
            <Nav/>
        </div>
    )
}


export default Header;
