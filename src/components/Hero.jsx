import React from 'react';

const Hero = () => {
    return (
        <div className="">
            <div className="relative mt-5 ">
                <div className="flex flex-col items-center">
                    <h2 className="w-fit px-3 text-7xl text-stone-600 font-extrabold italic border-l-5 border-t-5 rounded-full border-stone-600">URL-SS</h2>
                    <p className="p-2 text-4xl font-bold text-orange-400 [text-shadow:2px_2px_0_#960,-2px_2px_0_#960,2px_-2px_0_#960,-2px_-2px_0_#960]">
                        Your URL <br/>Shortening Solution
                        <span className="absolute text-[200px] rotate-12 md:-top-5 top-5 pl-15">!</span>
                    </p>
                </div>
                <div className="absolute animate-spin h-100 w-100 top-30 -right-100 rounded-full">
                    <div className="absolute hidden md:block bg-stone-800 h-100 w-100 top-50 -right-75 rounded-full animate-spin">
                        <div className="absolute h-[50%] w-[50%] bg-orange-400 opacity-50 z-10 top-0 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
