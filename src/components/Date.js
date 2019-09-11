import React from "react";

function Datecomponent (props){
    const {date, url} = props;
    return (
        <div>
            <h3>Date: {date}</h3>
            <div>
            <input type="date" ></input>
            <button>Submit</button>
            </div>
            <a  className="url-a" href="#">URL of image: {url}</a>  
        </div>
    );

}

export default Datecomponent;