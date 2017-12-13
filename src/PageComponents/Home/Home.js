import React from 'react';
import Nav from '../../UI/Nav/Nav';
import Page from '../../PageComponents/Page';
import './Home.css'

const Home = (props) => (
    <Page {...props}>
    <div className="nav-instructions">
        <span className="fa fa-chevron-up"></span>
        <p>Click an item to view</p>
    </div>
    <div className="container">
        
        

        <h1>Perry Mark Guinjicna</h1>
        <div className="bar-title"><h4>Web Developer</h4></div>

        <Nav itemClicked={props.navClickHandler}/>
    </div>
    </Page>
);

export default Home;