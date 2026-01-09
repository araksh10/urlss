import React from 'react';
import Hero from "../components/Hero.jsx";
import UrlShortner from "../components/UrlShortner.jsx";

const Home = () => {
    return (
        <div className="p-3">
            <Hero />
            <UrlShortner />
        </div>
    )
}
export default Home;
