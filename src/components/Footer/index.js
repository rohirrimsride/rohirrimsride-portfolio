import React from "react";
import LinkedIn from '../../assets/images/linkedin34.png';
import GitHub from '../../assets/images/GitHub32.png';

function Footer() {

    return (
        <footer>
            <div className="icon-links">
                <div>
                    <a href="https://www.linkedin.com/in/dave-barnes-b017b945" rel='noreferrer' target="_blank"><img src={LinkedIn} className="links" alt="linkedin icon" /></a>
                </div>
                <a href="https://stackoverflow.com/users/18684003/rohirrimsride" rel="noreferrer" target="_blank"><img src="https://stackoverflow.com/users/flair/18684003.png?theme=dark" className="links" alt="stackoverflow icon"/></a>
                <div>
                    <a href="https://github.com/rohirrimsride" rel='noreferrer' target="_blank"><img src={GitHub} className="links" alt="github icon" /></a>
                </div>
            </div>
            <div>
                <p className="email">dave.barnes23@gmail.com</p>
            </div>
            <div class="footer">
                <h3 className="built-by"><span class="h3-start">Built by</span>&nbsp;Dave Barnes</h3>
            </div>
        </footer>
    );
}

export default Footer;