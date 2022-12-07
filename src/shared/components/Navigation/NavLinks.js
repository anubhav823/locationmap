import React from "react";

import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = props => {
    return (
        <div>
            <ul className='nav-links' >
                <li>
                    <NavLink to='/'>All Users</NavLink>
                </li>
                <li>
                    <NavLink to='/u1/places'>My Places</NavLink>
                </li>
                <li>
                    <NavLink to='/places/new'>Add Place</NavLink>
                </li>
                <li>
                    <NavLink to='/auth'>Authenticate</NavLink>
                </li>
            </ul >
        </div >
    )
}

export default NavLinks