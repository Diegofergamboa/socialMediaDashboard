import React from "react";


function CardSmall ( { growth , icon , pageViews } ) {
    return (
        <div class="card-small">
        <p class="card-small-views">Page Views</p>
        <p class="card-small-icon">
            <img src={icon} alt="Icono de la red social."/>
        </p>
        <p class="card-small-number">{pageViews}</p>
        <p class="card-small-percentage">
            <span>
            <img src="images/icon-up.svg" alt=""/>
            {growth}%
            </span>
        </p>
        </div>
    );
};


export { CardSmall } ;