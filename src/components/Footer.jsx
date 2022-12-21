import React from "react";

function Footer(){

    const curryr = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright © {curryr}</p>
        </footer>
    )
}

export default Footer;