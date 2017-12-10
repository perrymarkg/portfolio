import React, { Component } from 'react';
import Nav from '../../UI/Nav/Nav';
import './Sidebar.css';

class Sidebar extends Component {

    render(){
        const active = this.props.activePage ? "active" : ""; 
        return (
            <div className={["sidebar", active].join(' ')}>
                <Nav 
                activePage={this.props.activePage} 
                itemClicked={this.props.itemClicked}
                showHome={true}
                icon={true}
                />
            </div>
        );
    }

}

export default Sidebar;