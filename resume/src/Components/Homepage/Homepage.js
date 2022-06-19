import React from "react";
import './Homepage.css';
import githubicon from '../../images/githubicon.png'
import linkedinicon from '../../images/linkedinicon.png'

function Homepage(){
    return (
        <div className="homepage_container">
            <div className="homepage_left">
            <p className="homepage_left_h1"><span className="red_color">Hi, </span>My name is</p>
            <p className="homepage_left_h2">Harish Sarika</p>
            <p className="homepage_left_h3">Developer at <span className="red_color">Somewhere</span></p>
            <p className="homepage_left_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div>
                <a href="" target="_blank"><img className="homepage_icon" src={githubicon} alt="github image" /></a>
                <a href="" target="_blank"><img className="homepage_icon" src={linkedinicon} alt="linkedin image" /></a>
            </div>
            <a href="mailto:harishsarika24@gmail.com"><button className="homepage_left_button">Get In Touch</button></a>
            </div>
            <div className="homepage_right">
            <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF"/>
            </div>
        </div>

    );
}
export default Homepage