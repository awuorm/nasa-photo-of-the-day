import React from "react";
import styled from "styled-components";


function Navigation () {
    const DivNav = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: #0f0c29; 
    `;
    const NavLogo = styled.img`
        width: 10%;
    `;
    const Nav = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
    `;
    const Anchor = styled.a`
        color: white;
    `;
    return(
        <DivNav>
            <NavLogo  alt="nasa-logo" className="nasa-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
            <Nav className="nav-a">
                <Anchor href="#">Home</Anchor>
                <Anchor href="#">Gallery</Anchor>
                <Anchor href="#">About</Anchor>
            </Nav>
        </DivNav>
    )

}

export default Navigation;