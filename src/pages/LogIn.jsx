import React from 'react';
import {MousePointer2} from 'lucide-react';


const LogIn = () => {
    return (
        <div className="flex flex-col items-center md:mt-50 md:mb-5">
            <div className="bg-stone-700 w-150 rounded-xl pb-5">
                <h2 className="text-5xl font-bold italic text-center m-3 text-stone-300">Log In</h2>
                <form action="" className="flex flex-col items-center">
                    {/*<input type="text" className="" placeholder="Enter username" />*/}
                    <input type="text" className="border-2 border-stone-700 w-100 h-10 rounded-full m-2 p-5 bg-white" placeholder="Enter email" />
                    <input type="text" className="border-2 border-stone-700 w-100 h-10 rounded-full m-2 p-5 bg-white" placeholder="Enter password" />
                    {/*<input type="text" className="" placeholder="Re-enter password" />*/}
                    <button className="m-2 p-2 bg-stone-300 w-40 rounded-full text-center text-stone-700 text-xl font-bold italic" type="submit">Let's go ...</button>
                </form>
                <p className="ml-10 italic text-lg text-stone-300">New here? No worries ...</p>
                <p className="flex ml-10 italic text-lg text-sky-300">Get registered here <MousePointer2 className="mt-3"/></p>
            </div>
        </div>
    )
}
export default LogIn
