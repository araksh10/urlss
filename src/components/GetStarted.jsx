import React from 'react';
import {Hand, MousePointer2} from 'lucide-react';

const GetStarted = () => {
    return (
        <div className="flex flex-col items-center mt-10 text-stone-600">
            <div>
                <h3 className="font-bold text-3xl">Welcome user!</h3>
            </div>
            <div className="mt-5">
                <p className="flex text-3xl font-bold text-orange-700">Wait <Hand className="size-10 ml-3"/></p>
                <p>Do not share bulky urls!</p>
                <p>Rather use <span className="text-orange-700 font-bold italic">URL-SS</span> to shorten it and have fun.</p>
            </div>
            <div className="my-5">
                <button className="h-20 w-100 bg-stone-700 rounded-full text-5xl text-stone-300 font-bold text-center">
                    Get Started
                </button>
            </div>
            <div>
                <p>Already a member? Then get inside now.</p>
                <a className="flex text-blue-400">Click here to log-in <MousePointer2 className="mt-2"/> </a>
            </div>
        </div>
    )
}
export default GetStarted
