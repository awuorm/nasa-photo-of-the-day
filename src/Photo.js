import React from "react";

function Photocreator (props) {
    const photo = props.photo;
    console.log(photo);
    return(
        <figure className="apod-photo">
            <img alt="image-of-the-day" src ={photo}/>
        </figure>
    )
}

export default Photocreator;