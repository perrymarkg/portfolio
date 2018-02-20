import React from 'react';
import Page from '../../PageComponents/Page';
import Wrap from '../../Layout/Wrap';
import Rating from '../../UI/Rating/Rating';
import Timeline from '../../UI/Timeline/Timeline';
import './Resume.css'

const Resume = (props) => {
    const skills = props.skills.map( (item, index) => {
        return <li key={index}><Rating title={item.name} level={item.level}  /></li>
    })
    
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
                    <Timeline items={props.employment} />
                </div>
                <hr/>
                <div className="resume-block">
                    <h3>Education</h3>
                    <p>University of the Cordilleras <br/>
                    Bachelor of Science in Information Technology <br/>
                    Graduated - 2011</p>
                </div>
                <hr/>
                <div className="resume-block">
                    
                    <div className="download">
                    <p>Please download the PDF version for more details.</p>
                    <a href={props.pdf} target="_blank" rel="noopener noreferrer"><span className="fa fa-download"></span><span className="text">download</span></a>
                    </div>
                </div>
                </Wrap>
            
        </div>
    </Page>
    )
}

export default Resume;