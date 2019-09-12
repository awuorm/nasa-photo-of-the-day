import React from "react";
import Photocreator from "./Photo";
import Datecomponent from "./Date";
import Storycomponent from "./Story";
import Formcomponent from "./Formdate";
import styled from "styled-components";

function Titlecomponent (props) {
    const H2 = styled.h2`
    
    `;
    return (
        <div>
            <H2>{props.title}</H2>
            <Photocreator photo={props.photo}/>
            <Datecomponent date={props.date} url={props.url} />
            <Formcomponent/>
            <Storycomponent story={props.story}/>
       </div>
    )
}

export default Titlecomponent;