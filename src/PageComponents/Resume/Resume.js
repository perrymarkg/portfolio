import React from 'react';
import Page from '../../PageComponents/Page';
import Notice from '../../UI/Notice/Notice';
import './Resume.css'

const Resume = (props) => (
    <Page {...props} >
        <div className="header">
            <h1>Resume</h1>
        </div>
        <div className="container">
            <Notice type="error"><p>Ooops! Sorry this page is still under construction. Please check back again soon.</p></Notice>
            <div className="download"><p>For the meantime please download the pdf version instead</p> <a href="https://drive.google.com/open?id=1gikH83gHNSNz6kXjLioun7EGzeEX80n9" target="_blank" rel="noopener noreferrer"><span className="fa fa-download"></span><span className="text">download</span></a></div>
        </div>
    </Page>
)

export default Resume;