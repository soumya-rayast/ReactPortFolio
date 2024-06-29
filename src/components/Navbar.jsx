import React, { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import {Link} from "scroll"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full top-0 bg-white bg-opacity-80 shadow-xl" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="text-2xl italic text-Green-300 cursor-pointer">Soumya</h1>
                <div className="flex md:order-2">
                    <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:ring-2 focus:ring-black">
                        <LuMenuSquare className="text-green-400 text-lg" />
                    </button>
                </div>
                <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 text-xl mt-4 md:mt-0">
                        <li>
                            <a href="#home" className="py-2 px-4 text-green-700 hover:text-black text-xl">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="py-2 px-4 text-green-700 hover:text-black text-xl">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="py-2 px-4 text-green-700 hover:text-black text-xl">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="py-2 px-4 text-green-700 hover:text-black text-xl">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
