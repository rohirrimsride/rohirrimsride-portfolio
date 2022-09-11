import React from "react";
import Nav from "../Nav";

function Header() {

    return (
        // <div>    
            <header>
                <h1>Dave Barnes Portfolio</h1>
                <Nav />
            {/* </header> */}
            
            <section class="space">
                <img src="./assets/images/space-pic.png" class="space-pic" alt="North Cascades, Lake Chelan" />
            </section>
        </header>
    );
}

export default Header;