import React from 'react';
import Page from '../../PageComponents/Page';
import Notice from '../../UI/Notice/Notice';
import Wrap from '../../Layout/Wrap';
import Rating from '../../UI/Rating/Rating';
import './Resume.css'

const Resume = (props) => {
    
    const skills = [
        ["PHP", 68],
        ["MySQL", 68],
        ["HTML", 78],
        ["CSS/CSS3", 78],
        ["Javascript", 58],
        ["jQuery", 68],
        ["Wordpress", 80],
        ["Woocommerce", 70],
        ["CodeIgniter", 60],
        ["Magento 2", 45],
        ["Shopify", 35],
        ["ReactJS", 35]
    ].map( (val, index) => {
        return <li key={index}><Rating title={val[0]} level={val[1]}  /></li>
    })
        
    return (
    <Page {...props} >
        <div className="header">
            <h1>Resume</h1>
        </div>
        
        <div className="container">
            { props.location.hash === '#vvv' ?
                <div>
                    <h3>Technical skills</h3>
                    <ul className="skills">
                        {skills}
                    </ul>
                </div> : 
                <Wrap><Notice type="error"><p>Ooops! Sorry this page is still under construction. Please check back again soon.</p></Notice>
                <div className="download"><p>For the meantime please download the pdf version instead</p> <a href="https://drive.google.com/open?id=1gikH83gHNSNz6kXjLioun7EGzeEX80n9" target="_blank" rel="noopener noreferrer"><span className="fa fa-download"></span><span className="text">download</span></a></div></Wrap>
            }
            
        </div>
    </Page>
    )
}

export default Resume;