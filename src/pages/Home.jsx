import React from 'react';
import Hero from "../components/Hero.jsx";
import UrlShortner from "../components/UrlShortner.jsx";
import GetStarted from "../components/GetStarted.jsx";

const Home = () => {
    return (
        <div className="p-3">
            <Hero />
            {/*<UrlShortner />*/}
            <GetStarted />
        </div>
    )
}
export default Home;
