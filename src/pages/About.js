import "./About.css";
import alliantShield from "../images/Alliant-International-University-Shield.png";
import berkeleyShield from "../images/University-of-California-Berkeley-Shield.png";
import denverShield from "../images/University-of-Denver-Shield.png";
import htmlLogo from "../images/HTML5-Logo.png";
import cssLogo from "../images/CSS3-Logo.png";
import jsLogo from "../images/JavaScript-ES6-Logo.jpg";
import bootstrapLogo from "../images/Bootstrap-Logo.png";
import jqueryLogo from "../images/jQuery-Logo.png";
import handlebarsLogo from "../images/Handlebars-Logo.png";
import pwaLogo from "../images/PWA-Logo.png";
import webpackLogo from "../images/Webpack-Logo.png";
import reactLogo from "../images/React-Logo.png";
import nodeLogo from "../images/Node-Logo.png";
import jestLogo from "../images/Jest-Logo.png";
import oopLogo from "../images/OOP-Logo.png";
import expressLogo from "../images/Express-Logo.png";
import mysqlLogo from "../images/MySQL-Logo.png";
import mvcLogo from "../images/MVC-Logo.png";
import mongodbLogo from "../images/MongoDB-Logo.png";
import graphqlLogo from "../images/GraphQL-Logo.png";
import mernLogo from "../images/MERN-Stack-Logo.png";
import restapiLogo from "../images/REST-API-Logo.png";

export default function About() {
  return (
    <div className="container-fluid page-container">
      <div className="row">
        {/* Heading */}
        <div className="page-heading col-2 text-end">
          <h1>About Me</h1>
        </div>

        {/* Experience, Education, Miscellaneous */}
        <div className="about-section col-7">
          <h3>Experience</h3>
            <ul>
              <li>
                💻 Completed intensive full stack web development boot camp
              </li>
              <li>
                👨🏻‍🏫 Taught & managed 100s of students as a science educator for 7 years
              </li>
              <li>
                🚀 Launching new career as a software engineer
              </li>
            </ul>
          <h3 className="about-section-heading">Education</h3>
            <ul>
              <li>
                <img src={denverShield} alt="University of Denver Shield"></img>
                Full Stack Coding Boot Camp ● University of Denver
              </li>
              <li>
                <img src={alliantShield} alt="Alliant International University Shield"></img>
                M.A. Education ● Alliant International University
              </li>
              <li>
                <img src={berkeleyShield} alt="University of California, Berkeley Shield"></img>
                B.A. Political Economy ● University of California, Berkeley
              </li>
            </ul>
          <h3 className="about-section-heading">Miscellaneous</h3>
            <ul>
              <li>
                ⭐️ Organized ● Detailed ● Problem-solver ● Professional ● Collaborative
              </li>
              <li>
                📍 Seoul, Korea ➡️ Los Angeles ➡️ San Francisco Bay Area ➡️ Colorado
              </li>
              <li>
                💙 Family 👨‍👩‍👧‍👦 Cooking 🍝 Gardening 🪴 Reading 📖
              </li>
            </ul>
        </div>

        {/* Skills */}
        <div className="skills-section col-3">
          <h3>Skills</h3>
          <h5 className="skills-section-subheading">Front-End</h5>
          <ul>
            <li><img className="logo" src={htmlLogo} alt="HTML5 Logo"></img>HTML5</li>
            <li><img className="logo" src={cssLogo} alt="CSS3 Logo"></img>CSS3</li>
            <li><img className="logo" src={jsLogo} alt="JS ES6 Logo"></img>JavaScript ES6</li>
            <li><img className="logo" src={jqueryLogo} alt="jQuery Logo"></img>jQuery</li>
            <li><img className="logo" src={bootstrapLogo} alt="Bootstrap Logo"></img>Bootstrap</li>
            <li><img className="logo" src={reactLogo} alt="React Logo"></img>React</li>
            <li><img className="logo" src={webpackLogo} alt="Webpack Logo"></img>Webpack</li>
            <li><img className="logo" src={handlebarsLogo} alt="Handlebars Logo"></img>Handlebars</li>
            <li><img className="logo" src={pwaLogo} alt="PWA Logo"></img>Progressive Web Apps</li>
          </ul>
          <h5 className="skills-section-subheading">Back-End</h5>
          <ul>
            <li><img className="logo" src={nodeLogo} alt="Node Logo"></img>Node</li>
            <li><img className="logo" src={expressLogo} alt="Express Logo"></img>Express</li>
            <li><img className="logo" src={mysqlLogo} alt="MySQL Logo"></img>MySQL</li>
            <li><img className="logo" src={mongodbLogo} alt="MongoDB Logo"></img>MongoDB</li>
            <li><img className="logo" src={graphqlLogo} alt="GraphQL Logo"></img>GraphQL</li>
            <li><img className="logo" src={jestLogo} alt="Jest Logo"></img>Jest</li>
            <li><img className="logo" src={mernLogo} alt="MERN Logo" id="mern-logo"></img>MERN Stack</li>
            <li><img className="logo" src={restapiLogo} alt="REST API Logo"></img>REST API</li>
            <li><img className="logo" src={oopLogo} alt="OOP Logo"></img>OOP (Object-Oriented Programming)</li>
            <li><img className="logo" src={mvcLogo} alt="MVC Logo"></img>MVC (Model-View-Controller)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}