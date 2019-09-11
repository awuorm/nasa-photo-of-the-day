import React from "react";

function Apod (props){
    const {photo, title, date, url, story} = props;
    return (
        <div>
            {
             <h2>{title}</h2>
             <img src ={photo}/>
             <  
            }
        </div>
    )

}

export default Apod;