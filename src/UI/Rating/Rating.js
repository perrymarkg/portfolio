import React from 'react';
import './Rating.css'

const Rating = (props) => {
    return (
        <div className="rating">
            <strong>{props.title}</strong>
            <div className="bar"><div className="level" style={{width:props.level+'%'}}></div></div>
        </div>
    );
    
    
}

export default Rating;