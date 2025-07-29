// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, HeadphonesIcon } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';

const Home = () => {
    // Mock data - replace with API calls
    const featuredProducts = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 199,
            originalPrice: 249,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 299,
            originalPrice: 399,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
            rating: 4.8,
            reviews: 95
        },
        {
            id: 3,
            name: "Laptop Stand",
            price: 49,
            originalPrice: 79,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
            rating: 4.3,
            reviews: 67
        },
        {
            id: 4,
            name: "Wireless Mouse",
            price: 29,
            originalPrice: 49,
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
            rating: 4.6,
            reviews: 203
        }
    ];

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Discover Amazing Products
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Shop the latest trends with unbeatable prices and fast delivery
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center transition-colors duration-200"
                        >
                            Shop Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-6"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Truck className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Free shipping on orders over $50</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-6"
                    >
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                        <p className="text-gray-600">100% secure payment processing</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center p-6"
                    >
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HeadphonesIcon className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Round the clock customer support</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                    <ProductGrid products={featuredProducts} />
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get the latest updates on new products and exclusive offers
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;