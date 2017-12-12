import React from 'react';
import Wrap from '../../Layout/Wrap';
import profile from '../../Assets/Images/profile.jpg';

import './Profile.css'

const Profile = (props) => (
    <Wrap>
        <div className="header">
            <div className="container">
                <h1>About Me</h1>
            </div>
            <div className="profile-image"><img src={profile} alt="Profile"/></div>
        </div>
        <div className="container">
        <h2 className="title">Perry Mark Guinjicna</h2>
        <p>A web developer based in Baguio City, Philippines with a Bachelor's degree in Information Technology.</p>
        
        <p>I have worked with various companies over the course of my six year career on a multitude of web based projects using web technologies such as PHP, MySQL, HTML, CSS, Javascript and jQuery. My area of expertise is in Back-End development with some skills in Front-End development that I have used in working on platforms such as Wordpress, Woocommerce, CodeIgniter and Magento 2.</p>

        <p>My field has a lot of things to offer and I enjoy learning new things that I can incorporate on my next web project. On my free time I often study ReactJS which is what this site is built on top of.</p>

        <p>At present I am currently employed with Zeald as a Back-End web developer and I am also open for exciting opportunties.</p>
        
        </div>
    </Wrap>
)

export default Profile;