import React from "react";
import './card.css';

function Card({ username , followers , icon , todayFollowers }) {
    return (
        <article className="card facebook">
        <p className="card-title">
            <img src={icon} alt="Logo"/>
            {username}
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src='../public/images/icon-up.svg' alt=""/>
            {todayFollowers} Today
        </p>
        </article>
    );
};

export { Card } ;