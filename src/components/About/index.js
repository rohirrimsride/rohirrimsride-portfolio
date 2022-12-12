import React from "react";
import aboutPic from "../../assets/images/about-me-img.jpg";

function About() {

    return (
        <section id="About" class="about-me">
                <h2 class="section-title">About</h2>
                <div class="about-scaling">    
                    <p>
                        I'm Dave Barnes.  I am a husband, father and adventurer of the open trail.  I've just completed the first stage of my development journey by completing the UTSA Full Stack Development bootcamp.

                        After working as in IT support for the last six years, I decided I want to know more about "how the sausage is made" in regards to front end development all the way to back end development.
                    </p>
                    <img alt="Dave, backpacking in Glacier Peak Wilderness" src={aboutPic} />
                </div>
        </section>
    );
}

export default About;