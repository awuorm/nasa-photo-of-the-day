import React from "react";
import styled from "styled-components";

function Photocreator (props) {
    const { photo } = props;
    const Figure = styled.figure`
        width:50vw;
        height: 50vh;
       margin-left: 20%;
  `;
    const Image = styled.img`
      
    `;
    return(
        <Figure className="apod-photo">
            <Image alt="image-of-the-day" src ={photo}/>
        </Figure>
    )
}

export default Photocreator;