// src/utils/formatPrice.js
export const formatPrice = (priceInUSD) => {
    // Convert USD to Naira (approximate rate: 1 USD = 1523 NGN)
    const priceInNaira = priceInUSD * 1523;
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(priceInNaira);
};

export const formatPriceOnly = (priceInUSD) => {
    const priceInNaira = priceInUSD * 1523;
    return new Intl.NumberFormat('en-NG', {
        minimumFractionDigits: 0
    }).format(priceInNaira);
};