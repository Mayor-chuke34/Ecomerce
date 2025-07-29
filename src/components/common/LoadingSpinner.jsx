// src/components/common/LoadingSpinner.jsx
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <motion.div
                className={`${sizes[size]} border-4 border-blue-200 border-t-blue-600 rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        </div>
    );
};

// Alternative spinner with dots
export const DotsSpinner = ({ className = '' }) => {
    return (
        <div className={`flex space-x-2 justify-center items-center ${className}`}>
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    className="w-3 h-3 bg-blue-600 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: index * 0.2
                    }}
                />
            ))}
        </div>
    );
};

// Pulse spinner
export const PulseSpinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <motion.div
                className={`${sizes[size]} bg-blue-600 rounded-full`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </div>
    );
};

export default LoadingSpinner;