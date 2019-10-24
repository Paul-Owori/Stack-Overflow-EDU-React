import React from 'react';
import { Link, NavLink as RouterNavLink } from "react-router-dom";

import './../stylesheets/modules/link-card.css'

const LinkCard =props=> {
    
        return ( 
            <Link className="link-card" to={props.linkTo}>
{props.children}
            </Link>
         );
    
}
 
export default LinkCard;