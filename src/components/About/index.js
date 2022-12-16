import React from "react";
import aboutPic from "../../assets/images/about-me-img.jpg";

function About() {

    return (
        <section id="About" class="about-me">
                <h2 class="section-title">About</h2>
                <div class="about-scaling">    
                    <p>
                        &nbsp;&nbsp;I'm Dave Barnes.  I am a husband, father and adventurer of the open trail.  I've just finished the first stage of my development journey by completing the UTSA Full Stack Development bootcamp, and am currently looking for an employment opportunity to put what I've learned to work.
                        <br/>
                        <br/>
                        &nbsp;&nbsp;After working in IT support for the last six years, I decided I want to dive more into learning and understanding the various levels of web and software creation from front end development to back end development. Looking down the trail, I'm hoping to add some experience with Ruby/Rails and Python. 
                    </p>
                    <img alt="Dave, backpacking in Glacier Peak Wilderness" src={aboutPic} />
                </div>
        </section>
    );
}

export default About;