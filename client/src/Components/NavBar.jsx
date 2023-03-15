import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return (
        <nav>
            <div>
                <Link to = "/about">About</Link>
                <button>LOG IN</button>
           

            </div>
        </nav>
    )
}
export default NavBar;