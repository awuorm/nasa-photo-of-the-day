import React from "react";
import styled from "styled-components";

function Datecomponent (props){
    const {date, url} = props;
    const H3 = styled.h3``;
    const Anchor = styled.a``;
     const Divdate = styled.div``;
    return (
        <Divdate>
            <H3>Date: {date}</H3>
            <Anchor  className="url-a" href="#">URL of image: {url}</Anchor>  
        </Divdate>
    );
}

export default Datecomponent;