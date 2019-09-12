import React from "react";
import Photocreator from "./Photo";
import Datecomponent from "./Date";
import Storycomponent from "./Story";
import Formcomponent from "./Formdate";

function Titlecomponent (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <Photocreator photo={props.photo}/>
            <Datecomponent date={props.date} url={props.url} />
            <Formcomponent/>
            <Storycomponent story={props.story}/>
       </div>
    )
}

export default Titlecomponent;