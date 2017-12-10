import React from 'react';
import Sidebar from '../PageComponents/Sidebar/Sidebar';

const Layout = (props) => (
    <div className="content-main">
        <Sidebar activePage={props.activePage} itemClicked={props.itemClicked}/>
        <div className="content-area">
            {props.children}
        </div>
    </div>
)

export default Layout;