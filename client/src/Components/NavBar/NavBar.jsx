import React from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css"



const NavBar = () =>{
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <Link to = "/about" className={style.about}>About</Link>
                <button className={style.btn}>LOG IN</button>
           

            </div>
        </nav>
    )
}
export default NavBar;