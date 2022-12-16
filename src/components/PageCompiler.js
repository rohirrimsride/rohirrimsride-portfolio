import React, { useState } from 'react';

import '../assets/css/style.css';

import Header from './Header';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function PageCompiler() {

    const [displayedPage, setDisplayedPage] = useState('About');

    const activePage = () => {
        if (displayedPage === 'About') {
            return <About />;
        }
        if (displayedPage === 'Portfolio') {
            return <Projects />;
        }
        if (displayedPage === 'Contact') {
            return <Contact />;
        }
        if (displayedPage === 'Resume') {
            return <Resume />;
        }
    }

    const pageChanger = (page) => setDisplayedPage(page);

    return (
   
    
        <body class="text-color">
                
            <Header displayedPage={displayedPage} pageChanger={pageChanger}/>
            
            <div>           
                
                {activePage()}

            </div>

            <Footer />

        </body>
    
    );
}

export default PageCompiler;
