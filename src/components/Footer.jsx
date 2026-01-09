import React from 'react';
import {Copyright} from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <div className="absolute bottom-0 p-2 bg-stone-700 w-full text-center text-stone-300 text-sm">
                <section className="">
                    <p className="flex justify-center italic"><Copyright/> 2026 URL-SS <span className="ml-1">- A URL shortening Service</span> </p>
                </section>
                <section className="">
                    <p>Powered by <span className="text-blue-400">Abir Rakshit</span></p>
                </section>
            </div>
        </div>
    )
}
export default Footer;
