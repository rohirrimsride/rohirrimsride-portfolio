import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/images/space-pic.png';
import '../assets/images/portfolio-pic.png';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Resume from './Resume';

function PageCompiler() {

    const [displayedPage, setDisplayedPage] = useState('About')

    return (
   
    
        <body class="text-color">
                
            <Header />
            
            <div>           
                <About />
            
                <Projects />

                <Resume />
            
                <Footer />

            </div>

        </body>
    
    );
}

export default PageCompiler;
