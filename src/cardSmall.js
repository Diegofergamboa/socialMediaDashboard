import React from "react";


function CardSmall ( { growth , icon , percentage } ) {
    return (
        <div class="card-small">
        <p class="card-small-views">Page Views</p>
        <p class="card-small-icon">
            <img src={icon} alt="Icono de la red social."/>
        </p>
        <p class="card-small-number">{growth}</p>
        <p class="card-small-percentage">
            <span>
            <img src="images/icon-up.svg" alt=""/>
            {percentage}
            </span>
        </p>
        </div>
    );
};


export { CardSmall } ;