import React from 'react';
import Nav from '../../UI/Nav/Nav';
import Wrap from '../../Layout/Wrap';
import './Home.css'

const Home = (props) => (
    
    <div className="container">
        
        <h1>Perry Mark Guinjicna</h1>
        <div className="bar-title"><h4>Web Developer</h4></div>

        <Nav itemClicked={props.navClickHandler}/>
    </div>
    
);

export default Home;