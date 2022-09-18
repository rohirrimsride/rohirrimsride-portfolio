import React from "react";
import JotThatThought from '../../assets/images/jot-that-thought.png';
import PizzaHunt from '../../assets/images/pizza-hunt.png';
import HobbyXChange from '../../assets/images/hobby-xchange.png';

function Projects() {

    return (
        <section id="portfolio" class="projects">
            <h2 class="section-title">Projects</h2>
            <div class="project-cards">
                <div class="card-reverse">
                <h3 class="project-title">Hobby X Change</h3>
                    <div class="card-scaling">
                        <p class="project-info">
                            Horiseon was a hypothetical client requesting that their webpage be refactored to fall in line with semantic html standards,
                            as well as streamlining their CSS to create a more readable code.
                        </p>
                        <a href="https://hobbyxchange.herokuapp.com/" rel='noreferrer' target="_blank"><img src={HobbyXChange} class="project-img" alt="robot" /></a>                        
                    </div>
                </div>
                <div class="card">
                    <h3 class="project-title-rg">Pizza Hunt</h3>
                    <div class="card-scaling-rg">
                        <p class="project-info-rg">Can you defeat these masters of the arena!</p>
                        {/* <!-- Credit: photo from unsplash.com Jehyun Sung --> */}
                        <a href="https://dry-thicket-19029.herokuapp.com/" rel='noreferrer' target="_blank"><img src={PizzaHunt} class="project-img" alt="pizza-hunt" /></a>                       
                    </div>
                </div>
                <div class="card-reverse">
                <h3 class="project-title">Jot That Thought</h3> 
                    <div class="card-scaling">
                        <p class="project-info">
                            The Run Buddy project was a hypothetical client requesting a final product that matches what you'll find 
                            at the published page.  I was given a page of fairly generic starting code and a list of features to add.
                        </p>
                        <a href="https://jot-that-thought.herokuapp.com/" rel='noreferrer' target="_blank"><img src={JotThatThought} class="project-img" alt="jot that thought" /></a>                                                    
                    </div>   
                </div>
            </div>
        </section>
    );
}

export default Projects;