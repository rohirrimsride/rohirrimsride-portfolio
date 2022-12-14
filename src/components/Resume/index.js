import React from "react";
import myResume from '../../assets/images/DB-Resume.pdf'

function Resume() {
    
    return (
        <div id="Resume" className="resumeContainer">
            <div className="profs-list">
                <div>
                    <h2 className="profs-title">Front-End Proficiencies</h2>
                    <ul className="list">
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Handlebars
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Responsive Design
                        </li>
                        <li>
                            Bootstrap
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="profs-title">Back-End Proficiencies</h2>
                    <ul className="list">
                        <li>
                            API's
                        </li>
                        <li>
                            REST
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB (Mongoose)
                        </li>
                        <li>
                            SQL (Sequelize)
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ul>
                </div>
            </div>
            <div className="download">
                <p>Download my <a className="resume" href={myResume} download>Resume</a></p>
            </div>
        </div>
    )
}

export default Resume;