// src/components/product/ProductDetail.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Plus, Minus, Share, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-600">Product not found</h2>
                    <p className="text-gray-500 mt-2">The product you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const {
        id,
        name,
        price,
        originalPrice,
        images = [product.image],
        rating,
        reviews,
        description,
        features = [],
        inStock = true,
        category,
        brand
    } = product;

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        // You can add a toast notification here
        alert(`Added ${quantity} ${name}(s) to cart!`);
    };

    const formatPrice = (priceInUSD) => {
        // Convert USD to Naira (approximate rate: 1 USD = 800 NGN)
        const priceInNaira = priceInUSD * 800;
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0
        }).format(priceInNaira);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                        >
                            <img
                                src={images[selectedImage]}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Thumbnail Images */}
                        {images.length > 1 && (
                            <div className="flex space-x-2 overflow-x-auto">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                                            }`}
                                    >
                                        <img src={image} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-blue-600 font-medium">{brand || 'ShopHub'}</p>
                            <h1 className="text-3xl font-bold text-gray-900 mt-1">{name}</h1>
                            <p className="text-gray-600 mt-2">{category}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">({reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-gray-900">
                                    {formatPrice(price)}
                                </span>
                                {originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">
                                        {formatPrice(originalPrice)}
                                    </span>
                                )}
                            </div>
                            {originalPrice && (
                                <p className="text-green-600 font-medium">
                                    You save {formatPrice(originalPrice - price)} ({Math.round(((originalPrice - price) / originalPrice) * 100)}% off)
                                </p>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className={`font-medium ${inStock ? 'text-green-600' : 'text-red-600'}`}>
                                {inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="font-medium">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="p-2 hover:bg-gray-100"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-2 font-medium">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="p-2 hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleAddToCart}
                                    disabled={!inStock}
                                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium flex items-center justify-center"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className={`p-3 border-2 rounded-lg ${isFavorite ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-600'
                                        } hover:border-red-500 hover:text-red-500`}
                                >
                                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-500"
                                >
                                    <Share className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="border-t border-gray-200 pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-3">
                                    <Truck className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Free Delivery</p>
                                        <p className="text-sm text-gray-600">Within Lagos</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-6 h-6 text-green-600" />
                                    <div>
                                        <p className="font-medium">Warranty</p>
                                        <p className="text-sm text-gray-600">1 Year Coverage</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RotateCcw className="w-6 h-6 text-orange-600" />
                                    <div>
                                        <p className="font-medium">Easy Returns</p>
                                        <p className="text-sm text-gray-600">7 Days Return</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        {description && (
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold mb-3">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{description}</p>
                            </div>
                        )}

                        {/* Features List */}
                        {features.length > 0 && (
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;