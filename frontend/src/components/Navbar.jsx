import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/moss.svg';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm dark:shadow-none' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src={logo} alt="Moss" className="h-10 w-10" />
                        <span className="text-2xl font-bold font-heading text-gray-900 dark:text-white tracking-wide">
                            Moss Chat
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Solutions</a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Resources</a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            Sign In
                        </button>
                        <button className="group relative px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-all flex items-center gap-2">
                            Try Free
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10 absolute w-full shadow-xl dark:shadow-none"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                                <a key={item} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 hover:bg-black/5 dark:hover:bg-white/5">
                                    {item}
                                </a>
                            ))}
                            <div className="mt-4 flex flex-col gap-2 p-2">
                                <button className="w-full text-center py-2 border border-black/10 dark:border-white/10 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5">Sign In</button>
                                <button className="w-full bg-green-500 text-black py-2 rounded-lg font-bold">Try Free</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
