import React from "react";
import DatTime from "./DatTime";
import Clock from "./ClockTime";
import MouseCursor from "./MouseCursor";
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
                <button className="viewportinfo-container"><ViewportInfo/></button>
                <button className="clock-time-container"><Clock/></button>
                <button><MouseCursor/></button>
        </div>


    );

};




export default Home;