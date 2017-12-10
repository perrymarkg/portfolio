import React from 'react';
import Wrap from '../../Layout/Wrap';
import Notice from '../../UI/Notice/Notice';
import './Resume.css'

const Resume = (props) => (
    <Wrap>
        <div className="header">
            <h1>Resume</h1>
        </div>
        <div className="container">
            <Notice type="error"><p>Ooops! Sorry this page is still under construction. Please check back again soon.</p></Notice>
            <div className="download"><p>For the meantime please download the pdf version instead</p> <a href="#"><span className="fa fa-download"></span><span className="text">download</span></a></div>
        </div>
    </Wrap>
)

export default Resume;