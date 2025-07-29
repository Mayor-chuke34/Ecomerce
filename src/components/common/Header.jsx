// src/components/common/Header.jsx
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(3); // This would come from context

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="text-2xl font-bold text-primary"
                        whileHover={{ scale: 1.05 }}
                    >
                        ShopHub
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Products</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Categories</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent outline-none flex-1"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm" className="hidden md:flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Login
                        </Button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="relative p-2"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden border-t border-gray-200 py-4"
                        >
                            <nav className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-700 hover:text-primary">Home</a>
                                <a href="#" className="text-gray-700 hover:text-primary">Products</a>
                                <a href="#" className="text-gray-700 hover:text-primary">Categories</a>
                                <a href="#" className="text-gray-700 hover:text-primary">About</a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;