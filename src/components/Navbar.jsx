import React from 'react';
import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between p-3 bg-stone-600">
                <section>
                    <p className="text-orange-400 text-3xl font-extrabold italic">URL-SS</p>
                </section>
                <section>
                    <img src={Logo} alt="logo" className="w-12" />
                </section>
                <section>

                </section>
            </div>
        </div>
    )
}
export default Navbar
