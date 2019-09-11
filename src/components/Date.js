import React from "react";

function Datecomponent (props){
    const {date, url} = props;
    return (
        <div>
            <h3>Date: {date}</h3>
            <a  className="url-a" href="#">URL of image: {url}</a>  
        </div>
    );

}

export default Datecomponent;