import React from "react";
import { CardSmall } from "./cardSmall";
import './overview.css';

function Overview () {
    return (
        <section class="overview">
            <div class="wrapper">
            <h2>Overview - Today</h2>
            <div class="grid">
                <CardSmall />
            </div>
            </div>
        </section>
    );
}

export { Overview } ;