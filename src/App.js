import React from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/images/DBfavicon.ico';
import './assets/images/space-pic.png';
import './assets/images/portfolio-pic.png';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    // <!DOCTYPE html>
    <html lang="en" class="bkgd-img">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="assets/css/style.css" />
            <link rel="icon" href="./assets/images/DBfavicon.ico" />
            <title>Dave Barnes Portfolio</title>
        </head>
    
        <body class="text-color">
            
            <Header />
            {/* <header>
                <h1>Dave Barnes Portfolio</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about-me">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact-me">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header> */}
    
            {/* <section class="space">
                <img src="./assets/images/space-pic.png" class="space-pic" alt="North Cascades, Lake Chelan" />
            </section> */}

            <About/>

            {/* <section id="about-me" class="about-me">
                    <h2 class="section-title">About</h2>
                    <div class="about-scaling">    
                        <p>
                            I'm Dave Barnes.  I am a husband, father and adventurer of the open trail.  I've just begun the first steps of my journey into being a full stack web developer.   
                            After working PC break-fix for the last six years, I've decided I want to know more about "how the sausage is made" in regards to front end development all the way
                            to back end development.  Our family moved to San Antonio, TX where I've been working for 3M for the past 2.5 years.
                        </p>
                        <img src="./assets/images/portfolio-pic.png" alt="Dave, backpacking in Glacier Peak Wilderness" />
                    </div>
            </section> */}
            <Projects />
            {/* <section id="projects" class="projects">
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
                                {/*<a href="https://rohirrimsride.github.io/robot-gladiators/" rel='noreferrer' target="_blank"><img src="./assets/images/robot-gladiators.jpg" class="project-img" alt="robot" /></a>                       
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
            </section> */}
    
            {/* <section id="contact-me" class="contact-me">
                <h2 class="section-title">Contact</h2> */}
                {/* <a href="https://www.linkedin.com/in/dave-barnes-b017b945" class="links">Linkedin</a>
                <a href="https://github.com/rohirrimsride" class="links">GitHub</a> */}
                {/* <a href=""></a> */}
            {/* </section> */}
            
            <Footer />
            {/* <footer class="footer">
                <h3><span class="h3-start">Made with care by</span> Dave Barnes</h3>
            </footer> */}
    
        </body>
    
    </html>
  );
}

export default App;
