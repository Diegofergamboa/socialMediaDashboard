import React from "react";
import './overview.css';

function Overview () {
    return(
        <section class="overview">
            <div class="wrapper">
            <h2>Overview - Today</h2>
            <div class="grid">
                <div class="card-small">
                <p class="card-small-views">Page Views</p>
                <p class="card-small-icon">
                    <img src="images/icon-facebook.svg" alt="">
                </p>
                <p class="card-small-number">87</p>
                <p class="card-small-percentage">
                    <span>
                    <img src="images/icon-up.svg" alt="">
                    3%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-facebook.svg" alt="">
                </p>
                <p class="card-small-number">52</p>
                <p class="card-small-percentage is-danger">
                    <span>
                    <img src="images/icon-down.svg" alt="">
                    2%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-instagram.svg" alt="">
                </p>
                <p class="card-small-number">5462</p>
                <p class="card-small-percentage">
                    <span>
                    <img src="images/icon-up.svg" alt="">
                    2257%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Profile Views</p>
                <p class="card-small-icon">
                    <img src="images/icon-instagram.svg" alt="">
                </p>
                <p class="card-small-number">52k</p>
                <p class="card-small-percentage">
                    <span>
                    <img src="images/icon-up.svg" alt="">
                    1375%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Retweets</p>
                <p class="card-small-icon">
                    <img src="images/icon-twitter.svg" alt="">
                </p>
                <p class="card-small-number">117</p>
                <p class="card-small-percentage">
                    <span>
                    <img src="images/icon-up.svg" alt="">
                    303%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-twitter.svg" alt="">
                </p>
                <p class="card-small-number">507</p>
                <p class="card-small-percentage">
                    <span>
                    <img src="images/icon-up.svg" alt="">
                    553%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-youtube.svg" alt="">
                </p>
                <p class="card-small-number">107</p>
                <p class="card-small-percentage is-danger">
                    <span>
                    <img src="images/icon-down.svg" alt="">
                    19%
                    </span>
                </p>
                </div>
                <div class="card-small">
                <p class="card-small-views">Total Views</p>
                <p class="card-small-icon">
                    <img src="images/icon-youtube.svg" alt="">
                </p>
                <p class="card-small-number">1407</p>
                <p class="card-small-percentage is-danger">
                    <span>
                    <img src="images/icon-down.svg" alt="">
                    12%
                    </span>
                </p>
                </div>
            </div>
            </div>
        </section>
    );
}