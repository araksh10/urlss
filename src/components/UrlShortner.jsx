import React from 'react'

const UrlShortner = () => {
    return (
        <div>
            <div className="flex flex-col items-center m-5">
                <section className="font-bold text-xl text-center">
                    <h3>Paste Your URL to be shortened</h3>
                </section>
                <section>
                    <form action="">
                        <section className="">
                            <input
                                className="border-2 border-stone-700 h-10 md:w-100 w-50 rounded-l-full  px-10"
                            />
                            <button type="submit" className="my-2 md:ml-0 ml-40 h-10 w-20 rounded-r-full bg-stone-700 border-2 border-stone-700 text-orange-400">Submit</button>
                        </section>
                    </form>
                </section>
                <section className="text-center">
                    URL-SS is a free tool to shorten URLs and generate short links<br/>
                    URL shortener allows to create a shortened link making it easy to share
                </section>
            </div>
        </div>
    )
}
export default UrlShortner
