import React from "react";

const Hero = () => {
    return (
        <div className="bg-black" id="hero">
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Turning Your <br /> <span className="text-[#652D90]">IDEAS</span> into <span className="text-[#652D90]">CODE</span></h1>
                        <p className="mt-6 text-lg leading-8 text-white p-5 rounded">For <span className="bg-[#262626] p-2 m-1 rounded-md">Startups</span>, <span className="bg-[#262626] p-2 m-1 rounded-md">Enterprise leaders</span>,<span className="bg-[#262626] m-1 p-2 rounded-md">Media & Publishers</span> and <span className="bg-[#262626] p-2 rounded-md">Social Good</span></p>
                        <div className="mt-10 flex items-center justify-center space-x-2">
                            <button className="px-6 py-2 border rounded-md text-white">Our Works</button>
                            <button className="px-6 py-2 border rounded-md text-white gradient-button">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;