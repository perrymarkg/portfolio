import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrap from '../../Layout/Wrap';


const NavItem = (props) => {
    const target = props.text === "Back" ? null : props.text.toLowerCase();
    const active = props.activePage === target ? "active" : "";
    let content;
    if( props.icon ) {
        let iconClass;
        switch( target ){
            case null:
                iconClass = 'fa-chevron-left';
                break;
            case "profile":
                iconClass = 'fa-user';
                break;
            case "portfolio":
                iconClass = 'fa-wrench';
                break;
            case "resume":
                iconClass = 'fa-newspaper-o';
                break;
            case "contact":
                iconClass = 'fa-phone';
                break;
            default:
                iconClass = 'fa-test';
                break;
        }
    
        const icon = props.icon ? <span className={["fa",  iconClass].join(' ')}></span> : false;
        content =   <Wrap>
                    
                    <div className="animate">
                        <div className="front">
                            {icon}
                            <span className="text">{props.text}</span>
                        </div>
                        <div className="back">
                            {icon}
                            <span className="text">{props.text}</span>
                        </div>
                    </div>
                    </Wrap>
    }
    else
        content = <span className="text">{props.text}</span>

    return (
        <li><NavLink to={props.text.toLowerCase()} className={[target, active].join(' ')} onClick={ (e) => props.clicked(e, target) }>{content}</NavLink></li>        
    )

    /* return (
        <li>
            <a href={props.text} className={[target, active].join(' ')} onClick={ (e) => props.clicked(e, target) }>
                {content}
            </a>
        </li>
    ) */
}
    


export default NavItem;