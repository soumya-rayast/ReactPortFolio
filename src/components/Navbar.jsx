import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full top-0 bg-orange-100 bg-opacity-80">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="text-2xl font-bold">SAM</h1>
                <div className="flex md:order-2">
                    <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200">
                        <AiOutlineMenuUnfold className="text-orange-400 text-lg" />
                    </button>
                </div>
                <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 text-xl mt-4 md:mt-0">
                        <li>
                            <a href="#home" className="py-2 px-4 text-violet-700 hover:text-orange-600">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="py-2 px-4 text-violet-700 hover:text-orange-600">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="py-2 px-4 text-violet-700 hover:text-orange-600">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="py-2 px-4 text-violet-700 hover:text-orange-600">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
