import React from "react";

function Datecomponent (props){
    const {date, url} = props;
    return (
        <div>
            <h3>Date: {date}</h3>
            <h3>URL of image: {url}</h3>  
        </div>
    );

}

export default Datecomponent;