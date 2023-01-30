import React from "react";
import aboutPic from "../../assets/images/about-me-img.jpg";

function About() {

    return (
        <section id="About" class="about-me">
                <h2 class="section-title-about">About</h2>
                <div class="about-scaling">  
                    <div class="bio">
                        <div class="bio-sections">
                            <h2 class="bio-section-title">Who I Am</h2>  
                            <p> 
                                &nbsp;&nbsp;I'm Dave Barnes.  I am a husband, father and adventurer of the open trail.  After working in IT support for the last eight years, I decided I want to dive more into learning and understanding the various levels of web and software creation from front end development to back end development.  
                                <br/>
                                <br/>
                                &nbsp;&nbsp;I've just finished the first stage of my development journey by earning the UTSA Full Stack Web Development bootcamp certificate.  The bootcamp provided an understanding of and experience with HTML, CSS, Javascript, Node.js, SQL, Mongodb and handling API's as well as React and other platforms and modules noted on the resume page. I am currently looking for an employment opportunity to put what I've learned to work. 
                            </p>
                        </div>
                        <div class="bio-sections">
                            <h2 class="bio-section-title">What I Like</h2>
                            <p>
                                &nbsp;&nbsp;I enjoy learning new things and working as part of team.  I value input from people on new technologies, ideas to improve on implementing the technologies I do know and improving best practices.  I try to approach life and work similarly in that there is always something you can learn from those around you.  
                            </p>
                        </div>
                        <div class="bio-sections">
                            <h2 class="bio-section-title">What I'm Learning</h2>
                            <p>
                                &nbsp;&nbsp;Looking down the trail, I'm hoping to add some experience with Ruby on Rails.  In addition, I am looking to continue with courses in Java, Python, C# and AWS through UTSA's continuing education opportunities.
                            </p>
                        </div>
                    </div>
                    <img alt="Dave, backpacking in Glacier Peak Wilderness" src={aboutPic} />
                </div>
        </section>
    );
}

export default About;