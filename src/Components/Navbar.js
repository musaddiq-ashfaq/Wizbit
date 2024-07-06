import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center bg-black py-3 px-4">
                <div className="flex flex-grow justify-center text-base">
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#home">Home</a>
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#cards">Services</a>
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#feedbackcards">Work</a>
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#process">Process</a>
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#why">About</a>
                    <a className="mr-5 px-6 py-2 rounded cursor-pointer hover:bg-[#262626] text-white transition delay-150 duration-300 ease-in-out"
                        href="#careers">Careers</a>
                </div>
                <button className="ml-auto px-6 py-2 border rounded text-white gradient-button">
                    Contact Us
                </button>
            </nav>
        </div>
    );
};

export default Navbar;