import React from 'react';
import './LargeCard.css';

const LargeCard = (props) => {
    
    return(
        <div className="card-lg" >
            
            <a href={props.url} target="_blank">
                <div className="bar">
                    <div className="container">
                        <h5 className="title">{props.title}</h5>
                        <h5 className="type">{props.type}</h5>
                    </div>
                </div>
                <div className="card-bg" style={{backgroundImage: "url("+props.bgImage+")"}}>
                    <div className="card-content" >
                        <div className="container">
                            {props.children}
                        </div>
                        <div className="bg-overlay" style={{backgroundImage:"url("+props.bgImage+")"}}></div>
                    </div>
                </div>
                
            </a>
        </div>
    );
}

export default LargeCard;