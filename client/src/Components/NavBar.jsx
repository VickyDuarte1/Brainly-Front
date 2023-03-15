import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return (
        <nav>
            <div>
                <Link to = "/about">About</Link>
                <Link to = "/form">
                <button>LOG IN</button>  
                </Link>
                
           

            </div>
        </nav>
    )
}
export default NavBar;