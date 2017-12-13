import React from 'react';
import { withRouter } from 'react-router'
import Sidebar from '../PageComponents/Sidebar/Sidebar';

const Layout = (props) => (
    <div className="content-main">
        
        <Sidebar activePage={props.location} />
        <div className="content-area">
            {props.children}
        </div>
    </div>
)

export default withRouter(Layout);