import React from 'react';
import './../stylesheets/modules/black-card.css'

const BlackCard = props => {

    return (
        <div className={props.className + " black-card"}>
            {props.children}
        </div>
    );

}

export default BlackCard;