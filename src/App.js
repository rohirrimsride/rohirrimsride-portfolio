import React from 'react';
// import './App.css';
import './assets/css/style.css';
import './assets/images/space-pic.png';
import './assets/images/portfolio-pic.png';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {



    return (
   
    
        <body class="text-color">
            
            <Header>
                
            </Header>
            
           
                    <About />
              
                    <Projects />
           
        
            <Footer />
        

        </body>
    
    );
}

export default App;
