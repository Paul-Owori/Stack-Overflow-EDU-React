import React from 'react';
import './../stylesheets/modules/card.css'

const Card =props=> {
    
        return ( 
            <div className="orange-card">
{props.children}
            </div>
         );
    
}
 
export default Card;