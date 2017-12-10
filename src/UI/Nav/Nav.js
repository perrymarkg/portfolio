import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

const Nav = (props) => {
    let items = ["Profile", "Portfolio", "Resume", "Contact"];
    if( props.showHome )
        items.unshift("Back");

    const navItems = items.map( (val, index) => {
        return <NavItem key={index} text={val} icon={props.icon} clicked={props.itemClicked} activePage={props.activePage} />
    });
    
    return (
        <nav className={props.class}>
            <ul>
                {navItems}
            </ul>
        </nav>
    );
}

export default Nav;