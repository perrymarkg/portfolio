import React from 'react';
import Wrap from '../../Layout/Wrap';
import './Contact.css'

const Contact = (props) => (
    <Wrap>
        <div className="header">
            <h1>Contact Information</h1>
        </div>
        <div className="container">
            <h4>Drop me a message:</h4>
            <ul className="contact">
                <li>
                    <a href="mailto:pmgd2nd@gmail.com" target="_blank">
                        <span className="fa fa-envelope"></span>
                        <span className="text">pmgd2nd@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="tel:639166924130" target="_blank">
                        <span className="fa fa-mobile"></span>
                        <span className="text">PH (+63) 916 692 4130</span>
                    </a>
                </li>
                <li>
                    <a href="skype:perrymark89" target="_blank">
                        <span className="fa fa-skype"></span>
                        <span className="text">perrymark89</span>
                    </a>
                </li>
            </ul>
            <h4>Or connect via:</h4>
            <ul className="contact social">
                <li>
                    <a href="https://www.facebook.com/tipzee89" target="_blank" className="fb">
                        <span className="fa fa-facebook"></span>
                        <span className="text">facebook</span>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" className="linkedin">
                        <span className="fa fa-linkedin"></span>
                        <span className="text">linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/perrymarkg" target="_blank" className="git">
                        <span className="fa fa-github"></span>
                        <span className="text">github</span>
                    </a>
                </li>
            </ul>
            <h4>Where the heck am I?</h4>
            <iframe src="https://www.google.com/maps/d/embed?mid=1JhQVBXOaZJsm8XgQ1jOEexYLGMgit5Z8&hl=en" width="100%" height="480"></iframe>
        </div>
    </Wrap>
)

export default Contact;