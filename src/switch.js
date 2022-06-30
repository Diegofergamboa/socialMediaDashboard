import React from "react";
import './switch.css';

function Switch ( { handleEventChecked }) {

    const [checked, setChecked] = React.useState('');

    console.log(checked)
    return (
    <div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" className="checkbox" onChange={handleEventChecked} checked={checked} id="checkbox" />
        <label className="switch" htmlFor="checkbox">
        </label>
    </div>
    );
};

export { Switch }  ;
