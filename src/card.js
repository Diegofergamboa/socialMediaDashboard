import React from "react";
import './card.css';

function Card(props) {
    return (
        <article className="card facebook">
        <p className="card-title">
            <img src="images/icon-facebook.svg" alt=""/>
            {props.username}
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{props.followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
        </p>
        </article>
    );
};

export { Card } ;