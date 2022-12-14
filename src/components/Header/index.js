import React from "react";
import Nav from "../Nav";
import headerPic from "../../assets/images/space-pic.png"

function Header({ displayedPage, pageChanger }) {

    return (
        <div>  
            <header>
                <h1>Dave Barnes Portfolio</h1>
                <Nav displayedPage={displayedPage} pageChanger={pageChanger}/>
                
            </header>
            <section class="space">
                <img src={headerPic} class="space-pic" alt="North Cascades, Lake Chelan" />
            </section>
        </div>
        
    );
}

export default Header;