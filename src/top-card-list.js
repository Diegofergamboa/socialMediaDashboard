import React from "react";
import { Card } from "./card";
import './top-card-list.css';

const cardListData = [
    {
        username: '@Diegofergamboa',
        id: 1 ,
        followers: 1453 ,
        todayFollowers: 15 ,
        icon: './'
    },
    {
        username: '@PepitoPerez',
        id: 2 ,
        followers: 143 ,
        todayFollowers: 12 ,
    },
    {
        username: '@DiegoOrtiz',
        id: 3 ,
        followers: 14530 ,
        todayFollowers: 62 ,
    },
    {
        username: '@JavaScriptRamirez',
        id: 4 ,
        followers: 7453 ,
        todayFollowers: 90 ,
    },
];






function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map(({username, id, followers}) => (<Card key={id} username={username} followers={followers}/>))
                }
            </div>
    </div>
    </section>
    );
};

export { TopCardList } ;