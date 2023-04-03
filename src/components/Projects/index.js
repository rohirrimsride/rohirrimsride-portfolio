import React from "react";

import HobbyXChange from '../../assets/images/hobby-xchange.png';
import TechSpeak from '../../assets/images/technically-speaking.png';
import PhotoPort from '../../assets/images/photo-port.png';
import GitHub from '../../assets/images/GitHub32.png';

function Projects() {

    return (
        <section id="portfolio" class="projects">
            <h2 class="section-title-projects">Projects</h2>
            <div class="project-cards">
                <div class="card-reverse">
                    <h3 class="project-title">Hobby-X-Change</h3>
                    <div class="card-scaling">
                        <div class="project-info">
                            <div class="project-summary">
                                <h3 class="project-info-titles">Summary:</h3><p>Hobby-X-Change is a website for hobby enthusiasts, who may not hold the same enthusiasm for their hobby that they once did.  This website allows users to create a profile, and share listings of items they have for sale or swap.</p>
                            </div>
                            <div class="project-role">
                                <h3 class="project-info-titles">Roles:</h3>
                                <ul class="roles-list">
                                    <li>Backend API connections</li>
                                    <li>Conditional UI Aspects</li>
                                </ul>
                            </div>
                            <div class="project-tools">
                                <h3 class="project-info-titles">Tools:</h3>
                                <ul class="tools-list">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Handlebars</li>
                                    <li>Bootstrap</li>
                                    <li>Hammer.js</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-image-group">
                            <a href="https://github.com/gnartistic/hobbyXchange" rel='noreferrer' target="_blank" className="links"><img src={GitHub} className="links" alt="github icon" /></a>
                            <a href="https://hobbyxchange.herokuapp.com/" rel='noreferrer' target="_blank"><img src={HobbyXChange} class="project-img" alt="robot" /></a>  
                        </div>                      
                    </div>
                </div>
                <div class="card">
                    <h3 class="project-title-rg">Technically Speaking</h3>
                    <div class="card-scaling-rg">
                        <div class="project-info-rg">
                            <div class="project-summary">
                                <h3 class="project-info-titles">Summary:</h3><p>Technically Speaking is in the process of a directional shift. It currently serves as a tech blog for users to post tech/coding related thoughts to share with other users. However, to make this more useful to myself and hopefully others, I plan to pivot toward it being more of a vault for storing tech articles that I've found helpful and want to come back to, along with a short description or thoughts related to the content of the article.</p>
                            </div>
                            <div class="project-role-rg">
                                <h3 class="project-info-titles">Roles:</h3>
                                <ul class="roles-list">
                                    <li>Sole Author</li>
                                </ul>
                            </div>
                            <div class="project-tools-rg">
                                <h3 class="project-info-titles">Tools:</h3>
                                <ul class="tools-list">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Handlebars</li>
                                    <li>MySQL</li>
                                    <li>Bcrypt</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-image-group-rg">
                            <a href="https://github.com/rohirrimsride/Technically-Speaking" rel='noreferrer' target="_blank" className="links"><img src={GitHub} className="links" alt="github icon" /></a>
                            <a href="https://technically-speaking-2022.herokuapp.com/" rel='noreferrer' target="_blank"><img src={TechSpeak} class="project-img" alt="pizza-hunt" /></a> 
                        </div>
                    </div>
                </div>
                <div class="card-reverse">
                    <h3 class="project-title">Photo Port</h3>
                    <div class="card-scaling">
                        <div class="project-info">
                            <div class="project-summary">
                                <h3 class="project-info-titles">Summary:</h3><p>Photo Port is a class project focusing on building an SPA using React.  The website shows off the work of a photographer, 
                            using modals to bring the pictures up close as well as adding a contact form for visitors who would like to get in touch with the photographer.</p>
                            </div>
                            <div class="project-role">
                                <h3 class="project-info-titles">Roles:</h3>
                                <ul class="roles-list">
                                    <li>Sole Author</li>
                                </ul>
                            </div>
                            <div class="project-tools">
                                <h3 class="project-info-titles">Tools:</h3>
                                <ul class="tools-list">
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                        <div class="project-image-group">
                            <a href="https://github.com/mherring11/360-sports" rel='noreferrer' target="_blank" className="links"><img src={GitHub} className="links" alt="github icon" /></a>
                            <a href="https://rohirrimsride.github.io/photo-port/" rel='noreferrer' target="_blank"><img src={PhotoPort} class="project-img" alt="port" /></a> 
                        </div>                      
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;

/* POTENTIAL ADDITIONAL PROJECTS TO ADD */
// import JotThatThought from '../../assets/images/jot-that-thought.png';
// import PizzaHunt from '../../assets/images/pizza-hunt.png';
// import Sports from '../../assets/images/360sports.png';
// import RunBuddy from '../../assets/images/hero-bg.jpg';
//eslint-disable-next-line
                {/* <div class="card">  
                    <h3 class="project-title-rg">Pizza Hunt</h3>
                    <div class="card-scaling-rg">
                        <p class="project-info-rg">
                            Do you have a great pizza recipe that needs to be shared with the world?  
                            Pizza Hunt is a great place with a great community for sharing and finding new recipes for the best pizza pies!!
                        </p>
                        <a href="https://github.com/rohirrimsride/pizza-hunt" rel='noreferrer' target="_blank" className="links"><img src={GitHub} className="links" alt="github icon" /></a>
                        <a href="https://dry-thicket-19029.herokuapp.com/" rel='noreferrer' target="_blank"><img src={PizzaHunt} class="project-img" alt="pizza-hunt" /></a>                       
                    </div>
                </div> */}
//eslint-disable-next-line
                {/* <div class="card-reverse">
                    <h3 class="project-title">Jot That Thought</h3> 
                    <div class="card-scaling">
                        <p class="project-info">
                            Jot That Thought allows the user to record their thoughts or ideas to engage with again at a later time.
                            Add new thoughts, delete old thoughts, but most important save those great ideas.
                        </p>
                        <a href="https://github.com/rohirrimsride/jot-that-thought" rel='noreferrer' target="_blank"><img src={GitHub} className="links" alt="github icon" /></a>
                        <a href="https://jot-that-thought.herokuapp.com/" rel='noreferrer' target="_blank"><img src={JotThatThought} class="project-img" alt="jot that thought" /></a>                                                    
                    </div>   
                </div>
                <div class="card">
                    <h3 class="project-title-rg">360 Sports</h3>
                    <div class="card-scaling-rg">
                        <p class="project-info-rg">
                            Just like a 360 dunk, 360 Sports is sure to get users out of their seats and on their feet. 
                            360 Sports is a web application that provides users with the means to connect with and engage with other sports enthusiasts. 
                            It currently offers the ability to post items that you no longer need or want, or to find items that you do want.
                        </p>
                        <a href="https://github.com/rohirrimsride/photo-port" rel='noreferrer' target="_blank"><img src={GitHub} className="links" alt="github icon" /></a>
                        <a href="https://o360-sports.herokuapp.com/" rel='noreferrer' target="_blank"><img src={Sports} class="project-img" alt="port" /></a>                       
                    </div>
                </div> */}
//eslint-disable-next-line
                {/* <div class="card-reverse">
                    <h3 class="project-title">Run Buddy</h3> 
                    <div class="card-scaling">
                        <p class="project-info">
                            The Run Buddy project was a hypothetical client requesting a final product that matches what you'll find 
                            at the published page.  I was given a page of fairly generic starting code and a list of features to add.
                        </p>
                        <a href="https://github.com/rohirrimsride/run-buddy" rel='noreferrer' target="_blank" className="links"><img src={GitHub} className="links" alt="github icon" /></a>
                        <a href="https://rohirrimsride.github.io/run-buddy/" rel='noreferrer' target="_blank"><img src={RunBuddy} class="project-img" alt="run buddy" /></a>                                                    
                    </div>
                </div> */}