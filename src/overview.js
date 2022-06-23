import React from "react";
import { CardSmall } from "./cardSmall";
import './overview.css';
import './globals.css';


const cardSmallList = [
    {
        key: 1 ,
        icon: 'assets/icon-facebook.svg' , 
        pageViews: '87' ,
        growth: 3 , 
    } ,
    {
        key: 2 ,
        growth: 2257 , 
        pageViews: '52' ,
        icon: 'assets/icon-twitter.svg' , 
    } ,
    {
        key: 3 ,
        growth: 1375 , 
        pageViews: '5462' ,
        icon: 'assets/icon-instagram.svg' , 
    } ,
    {
        key: 4 ,
        growth: 303 , 
        pageViews: '117' ,
        icon: 'assets/icon-youtube.svg' , 
    } ,
];

function Overview () {
    return (
        <section className="overview">
            <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    cardSmallList.map (({ icon , pageViews, growth, key}) => 
                        <CardSmall
                            key={key}
                            growth={growth}
                            pageViews={pageViews}
                            icon={icon}
                        />
                    )
                }
            </div>
            </div>
        </section>
    );
}

export { Overview } ;