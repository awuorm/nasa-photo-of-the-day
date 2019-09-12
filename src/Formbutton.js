import React from "react";


function Formbutton() {
    

    const func = event => {
        console.log(event.target.parentNode.children[1])
    }
    
    return (
            <>
                <button onClick={func}>Submit</button>
            </>
    );

}

export default Formbutton;