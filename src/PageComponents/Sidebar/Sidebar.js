import React from 'react';
import Nav from '../../UI/Nav/Nav';
import './Sidebar.css';

const Sidebar = (props) => {
       
        const active = props.activePage && props.activePage.pathname !== '/' ? "active" : ""; 
        return (
            <div className={["sidebar", active].join(' ')}>
                <Nav 
                activePage={props.activePage} 
                showHome={true}
                icon={true}
                />
            </div>
        );

}

export default Sidebar;