import React from "react";
import DatTime from "./DatTime";
import UserAgentInfo from "./UserAgentInfo";
import ViewportInfo from "./ViewportInfo";
import "./Home.css";

const Home = () => {

    return (
        <div className="home-page-container container">
            <p className="home-page-container_head-text">
                Это главная страница
                </p>
                <button className="date-time-container"><DatTime /></button>
                <button className="user-agentInfo-container"><p>browser information</p><UserAgentInfo/></button>
                <button><ViewportInfo/></button>
        </div>


    );

};




export default Home;