import React from "react";
import Dat_time from "./Dat_time";
import UserAgentInfo from "./UserAgentInfo";
import "./Home.css";

const Home = () => {

    return (
        <div className="home-page-container container">
            <p className="home-page-container_head-text">
                Это главная страница
                </p>
                <p>Описание домашней страницы</p>
                <button className="date-time-container"><Dat_time /></button>
                <div><UserAgentInfo /></div>
        </div>
    );
};
export default Home;