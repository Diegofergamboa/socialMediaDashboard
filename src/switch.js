import React, { useRef } from "react";
import './switch.css';

function Switch ({
        handleCheckbox , 
        checked ,
        setChecked
    }) {

    const ref = useRef(null);

    function handleChange() {
        setChecked(ref.current.checked)
    }
    
    return (
    <div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input ref={ref} type="checkbox" onChange={handleChange} checked={checked} className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">
        </label> 
    </div>
    );
};

export default Switch ;
