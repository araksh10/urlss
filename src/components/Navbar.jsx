import React from 'react';
import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="select-none">
            <div className="flex justify-between p-3 bg-stone-600 text-orange-400 ">
                <section>
                    <p className="text-3xl font-extrabold italic">URL-SS</p>
                </section>
                <section>
                    <img src={Logo} alt="logo" className="w-12" />
                </section>
                <section>
                    <p className="flex flex-col lg:flex-row font-bold italic">
                        Shorten <br className="lg:hidden" /> The URL
                    </p>
                </section>
            </div>
        </div>
    )
}
export default Navbar
