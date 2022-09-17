import React, { useState } from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/images/space-pic.png';
import './assets/images/portfolio-pic.png';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {

    const [projectsSelected, setProjectSelected] = useState(false);
    const [resumeSelected, setResumeSelected] = useState(false);


    return (
   
    
        <body class="text-color">
            
            <Header>
                
            </Header>
            
            {!projectsSelected || !resumeSelected ? (
                <>
                    <About />
                </>
            ) : (
                <Projects />
            )}
        
            <Footer />
        

        </body>
    
    );
}

export default App;
