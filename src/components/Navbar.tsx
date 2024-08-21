import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-gray-900 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <h1 className="text-2xl font-bold">AI App</h1>
                <div className="flex items-center space-x-4 md:space-x-8">
                    {/* Menu Button for Mobile */}
                    <button type="button" className="text-white md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle Navigation" >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"}></path>
                        </svg>
                    </button>

                    {/* Navigation Links for Desktop */}
                    <ul className="hidden md:flex md:space-x-8">
                        <li><a href="#features" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">Features</a></li>
                        <li><a href="/About" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">About</a></li>
                        <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-gray-800 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4 py-4 px-6">
                    <li><a href="#features" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">Features</a></li>
                    <li><a href="/About" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">About</a></li>
                    <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-700 transition duration-300 rounded">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
