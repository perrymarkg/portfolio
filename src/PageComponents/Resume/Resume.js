import React from 'react';
import Page from '../../PageComponents/Page';
import Wrap from '../../Layout/Wrap';
import Rating from '../../UI/Rating/Rating';
import Timeline from '../../UI/Timeline/Timeline';
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
        ["Shopify", 22],
        ["ReactJS", 30]
    ].map( (val, index) => {
        return <li key={index}><Rating title={val[0]} level={val[1]}  /></li>
    });

    const employment = [
        ["August 2015 - Present", <Wrap><p>Zeald (Homebased)</p><p>Back End Developer</p></Wrap>],
        ["February 2013 – March 2015", <Wrap><p>BlackhouseIT</p><p>Senior Web Developer</p></Wrap>],
        ["December 2012 – August 2013", <Wrap>Freelance Web Developer</Wrap>],
        ["January 2012- August 2012", <Wrap><p>Atissoftware</p><p>Junior Web Developer</p></Wrap>],
        ["September 2011 – July 2012", <Wrap><p>Webdefines (Part-Time)</p><p>Junior Web Developer</p></Wrap>]
    ]
        
    return (
    <Page {...props} >
        <div className="header">
            <h1>Resume</h1>
        </div>
        
        <div className="container">
                <Wrap>
                <div className="resume-block">
                    <h3>Career Objective</h3>
                    <p>Seeking for a challenging and rewarding position in a progressive web development firm where I could contribute and
improve my skills in the field of web technologies</p>
                </div>
                <hr/>
                <div className="resume-block">
                    <h3>Technical skills</h3>
                    <ul className="skills">
                        {skills}
                    </ul>
                </div>
                <hr/>
                <div className="resume-block">
                    <h3>Employment History</h3>
                    <Timeline items={employment} />
                </div>
                <hr/>
                <div className="resume-block">
                    <h3>Education</h3>
                    <p>University of the Cordilleras <br/>
                    Bachelor of Science in Information Technology <br/>
                    (2011)</p>
                </div>
                <hr/>
                <div className="resume-block">
                    
                    <div className="download">
                    <p>Please download the PDF version for more details.</p>
                    <a href="https://drive.google.com/open?id=1gikH83gHNSNz6kXjLioun7EGzeEX80n9" target="_blank" rel="noopener noreferrer"><span className="fa fa-download"></span><span className="text">download</span></a>
                    </div>
                </div>
                </Wrap>
            
        </div>
    </Page>
    )
}

export default Resume;