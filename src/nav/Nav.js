import React from 'react';
import style from './Nav.module.css';


const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">About me</a>
            <a href="">Award</a>
            <a href="">Education</a>
            <a href="">Experience</a>
            <a href="">My skills</a>
        </div>
    )
}


export default Nav;
