import React from "react";
import Formlabel from "./Formlabel";
import Formbutton from "../Formbutton";


function Formcomponent (){
    
    return (
            <div className="form-date">
                <Formlabel/>
                <input type="date" ></input>
                <Formbutton/>
            </div>
    );

}

export default Formcomponent;