// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/product/ProductGrid';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock data - replace with actual API call
    const mockProducts = [
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
        },
        {
            id: 5,
            name: "USB-C Cable",
            price: 19,
            originalPrice: 29,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
            rating: 4.2,
            reviews: 89
        },
        {
            id: 6,
            name: "Phone Case",
            price: 25,
            originalPrice: 35,
            image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=300&fit=crop",
            rating: 4.4,
            reviews: 156
        }
    ];

    useEffect(() => {
        // Simulate API call
        const fetchProducts = async () => {
            setLoading(true);
            // Simulate loading time
            await new Promise(resolve => setTimeout(resolve, 1000));
            setProducts(mockProducts);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>

                {/* Filter Section - You can expand this later */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-4">
                        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Categories</option>
                            <option>Electronics</option>
                            <option>Accessories</option>
                            <option>Clothing</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Sort by</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <ProductGrid products={products} loading={loading} />
            </motion.div>
        </div>
    );
};

export default Products;