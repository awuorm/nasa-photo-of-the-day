import React from "react";


function Navigation () {
    return(
        <div className ="nav-cont">
            <img  alt="nasa-logo" className="nasa-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
            <nav className="nav-a">
                <a href="#">Home</a>
                <a href="#">Gallery</a>
                <a href="#">About</a>
            </nav>
        </div>
    )

}

export default Navigation;