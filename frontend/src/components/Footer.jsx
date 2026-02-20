import { Github, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/moss.svg';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black pt-20 pb-12 border-t border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white text-2xl font-heading font-bold tracking-wide">
                            <img src={logo} alt="Moss" className="w-10 h-10" /> Moss Chat
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed">
                            AI-powered customer support platform built for modern businesses.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-gray-900 dark:text-white font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Database</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Search</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Charts</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-gray-900 dark:text-white font-semibold">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-gray-900 dark:text-white font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2024 Moss Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
