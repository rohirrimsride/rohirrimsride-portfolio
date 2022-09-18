import React from "react";

function Nav({ displayedPage, pageChanger }) {
    
    return ( 
        <nav>
            <ul>
                <li>
                    <a 
                        href="#about-me"
                        onClick={() => pageChanger('About')} 
                        className={displayedPage === 'About' ? 'active-nav' : 'inactive-nav'} >About me
                    </a>
                </li>
                <li>
                    <a 
                        href="#portfolio"
                        onClick={() => pageChanger('Portfolio')} 
                        className={displayedPage === 'Portfolio' ? 'active-nav' : 'inactive-nav'} >Portfolio
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact-me"
                        onClick={() => pageChanger('Contact')} 
                        className={displayedPage === 'Contact' ? 'active-nav' : 'inactive-nav'} >Contact
                    </a>
                </li>
                <li>
                    <a 
                        href="#resume"
                        onClick={() => pageChanger('Resume')} 
                        className={displayedPage === 'Resume' ? 'active-nav' : 'inactive-nav'} >Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;