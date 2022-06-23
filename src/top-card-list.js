import React from "react";
import { Card } from "./card";
import './top-card-list.css';

const cardListData = [
    {
        username: '@Diegofergamboa',
        id: 1 ,
        followers: 1453 ,
        todayFollowers: 15 ,
        icon: '../assets/icon-facebook.svg' ,
    },
    {
        username: '@PepitoPerez',
        id: 2 ,
        followers: 143 ,
        todayFollowers: 12 ,
        icon: '../assets/icon-instagram.svg' ,
    },
    {
        username: '@DiegoOrtiz',
        id: 3 ,
        followers: 14530 ,
        todayFollowers: 62 ,
        icon: '../assets/icon-twitter.svg' ,
    },
    {
        username: '@JavaScriptRamirez',
        id: 4 ,
        followers: 7453 ,
        todayFollowers: 90 ,
        icon: '../assets/icon-youtube.svg' ,
    },
];






function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                }
            </div>
    </div>
    </section>
    );
};

export { TopCardList } ;