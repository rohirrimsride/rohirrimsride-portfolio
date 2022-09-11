import React from "react";

function Projects() {

    return (
        <section id="projects" class="projects">
            <h2 class="section-title">Projects</h2>
            <div class="project-cards">
                <div class="card-reverse">
                    <h3 class="project-title">Run Buddy</h3> 
                    <div class="card-scaling">
                        <p class="project-info">
                            The Run Buddy project was a hypothetical client requesting a final product that matches what you'll find 
                            at the published page.  I was given a page of fairly generic starting code and a list of features to add.
                        </p>
                        <a href="https://rohirrimsride.github.io/run-buddy/" rel='noreferrer' target="_blank"><img src="./assets/images/hero-bg.jpg" class="project-img" alt="run buddy" /></a>                                                    
                    </div>
                </div>
                <div class="card">
                    <h3 class="project-title-rg">Robot Gladiators!</h3>
                    <div class="card-scaling-rg">
                        <p class="project-info-rg">Can you defeat these masters of the arena!</p>
                        {/* <!-- Credit: photo from unsplash.com Jehyun Sung --> */}
                        <a href="https://rohirrimsride.github.io/robot-gladiators/" rel='noreferrer' target="_blank"><img src="./assets/images/robot-gladiators.jpg" class="project-img" alt="robot" /></a>                       
                    </div>
                </div>
                <div class="card-reverse">
                    <h3 class="project-title">Horiseon Refactored</h3>
                    <div class="card-scaling">
                        <p class="project-info">
                            Horiseon was a hypothetical client requesting that their webpage be refactored to fall in line with semantic html standards,
                            as well as streamlining their CSS to create a more readable code.
                        </p>
                        <a href="https://rohirrimsride.github.io/Hor-ise-on-Refactored/" rel='noreferrer' target="_blank"><img src="./assets/images/digital-marketing-meeting.jpg" class="project-img" alt="robot" /></a>                        
                    </div>   
                </div>
            </div>
        </section>
    );
}

export default Projects;