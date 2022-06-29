import React, { useRef } from "react";
import './switch.css';

function Switch ({
        handleCheckbox , 
        checked ,
        setChecked
    }) {

    const ref = useRef(null);

    
    return (
    <div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">
        </label> 
    </div>
    );
};

export default Switch ;
