/**
 * HomePage Component
 * 
 * PURPOSE: Main landing page of the e-commerce site
 * 
 * WHAT IT DOES:
 * - Displays hero banner with special offers
 * - Shows products categorized by type (All, Men's, Women's, Kids, Electronics)
 * - Fetches data from API on component load
 * - Manages loading and error states
 * 
 * REACT HOOKS USED:
 * 1. useState - Manages component state (products, loading, errors)
 * 2. useEffect - Runs code when component mounts (API calls)
 * 
 * STATE MANAGEMENT:
 * - State is data that changes over time
 * - When state updates, React re-renders component
 * - useState hook provides state and updater function
 * 
 * LIFECYCLE:
 * 1. Component mounts (first renders)
 * 2. useEffect runs (fetches data)
 * 3. State updates (products loaded)
 * 4. Component re-renders (shows products)
 */

import { useState, useEffect } from 'react';
import HeroBanner from '../components/common/HeroBanner';
import ProductGrid from '../components/product/ProductGrid';
import apiService from '../services/apiService';
import './HomePage.css';

/**
 * HomePage Component
 * Main page that users see when visiting site
 */
const HomePage = () => {
    // STATE DECLARATIONS
    // useState returns [currentValue, updateFunction]

    // All products from API
    const [allProducts, setAllProducts] = useState([]);

    // Loading state - true while fetching data
    const [loading, setLoading] = useState(true);

    // Error state - stores error message if something fails
    const [error, setError] = useState(null);

    /**
     * useEffect Hook
     * 
     * WHAT IT DOES:
     * - Runs side effects (API calls, subscriptions, etc.)
     * - Runs after component renders
     * 
     * SYNTAX: useEffect(function, dependencies)
     * - function: Code to run
     * - dependencies []: When to run
     *   - [] = run once on mount
     *   - [var] = run when var changes
     *   - no array = run after every render
     * 
     * WHY USE IT?
     * - Can't directly call API in component body
     * - Need to wait for component to mount
     * - Avoid infinite loops
     */
    useEffect(() => {
        /**
         * Fetch all products from API
         * Async function because API calls take time
         */
        const fetchProducts = async () => {
            try {
                // Start loading
                setLoading(true);
                setError(null); // Clear any previous errors

                // Call API service to get products
                const products = await apiService.getAllProducts();

                // Add random badges and prices for demo
                const enhancedProducts = enhanceProducts(products);

                // Update state with fetched products
                setAllProducts(enhancedProducts);
            } catch (err) {
                // If error occurs, update error state
                console.error('Error fetching products:', err);
                setError('Failed to load products. Please try again later.');
            } finally {
                // Stop loading regardless of success/failure
                setLoading(false);
            }
        };

        // Call the fetch function
        fetchProducts();

        // Empty dependency array [] means run once on mount
    }, []);

    /**
     * Enhance products with additional data for demo
     * Adds badges, original prices for sale display
     * @param {Array} products - Original products from API
     * @returns {Array} Enhanced products
     */
    const enhanceProducts = (products) => {
        // Badge options to randomly assign
        const badges = [
            { text: '40% OFF', type: 'sale' },
            { text: 'NEW', type: 'new' },
            { text: 'HOT', type: 'hot' },
            null, // No badge
        ];

        return products.map((product) => {
            // Randomly assign badge (25% chance for each type)
            const randomBadge = badges[Math.floor(Math.random() * badges.length)];

            // Add original price if has sale badge
            const originalPrice = randomBadge?.text === '40% OFF'
                ? (product.price * 1.67).toFixed(2) // Calculate original price
                : null;

            return {
                ...product, // Spread operator - copies all properties
                badge: randomBadge?.text,
                badgeType: randomBadge?.type,
                originalPrice,
            };
        });
    };

    /**
     * Filter products by category
     * @param {string} category - Category to filter
     * @returns {Array} Filtered products
     */
    const getProductsByCategory = (category) => {
        return allProducts.filter(product =>
            product.category.toLowerCase().includes(category.toLowerCase())
        );
    };

    // ERROR STATE UI
    if (error) {
        return (
            <div className="error-container">
                <h2>Oops!</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }

    // MAIN RENDER
    return (
        <div className="homepage">
            {/* Hero Banner Section */}
            <HeroBanner
                title="Special Offer"
                discount="Up to 40% OFF"
                buttonText="Shop Now"
            />

            {/* All Products Section */}
            <ProductGrid
                title="All Products"
                products={allProducts}
                loading={loading}
            />

            {/* Men's Fashion Section */}
            <ProductGrid
                title="Men's Fashion"
                products={getProductsByCategory("men's clothing")}
                loading={loading}
            />

            {/* Women's Fashion Section */}
            <ProductGrid
                title="Women's Fashion"
                products={getProductsByCategory("women's clothing")}
                loading={loading}
            />

            {/* Electronics Section */}
            <ProductGrid
                title="Electronics"
                products={getProductsByCategory("electronics")}
                loading={loading}
            />

            {/* Jewelry (as Kids Fashion alternative) */}
            <ProductGrid
                title="Accessories & Jewelry"
                products={getProductsByCategory("jewelery")}
                loading={loading}
            />
        </div>
    );
};

export default HomePage;

/**
 * KEY CONCEPTS EXPLAINED:
 * 
 * 1. useState HOOK:
 *    const [value, setValue] = useState(initialValue)
 *    - value: current state
 *    - setValue: function to update state
 *    - initialValue: starting value
 *    - Updating state triggers re-render
 * 
 * 2. useEffect HOOK:
 *    useEffect(() => { code }, [dependencies])
 *    - Runs side effects after render
 *    - Empty deps []: runs once on mount
 *    - With deps [var]: runs when var changes
 *    - Return function: cleanup (optional)
 * 
 * 3. ASYNC/AWAIT:
 *    - async function can use await
 *    - await pauses until Promise resolves
 *    - try/catch handles errors
 *    - finally runs regardless
 * 
 * 4. SPREAD OPERATOR (...):
 *    {...product, newProp: value}
 *    - Copies all properties from product
 *    - Adds or overrides newProp
 *    - Creates new object (immutability)
 * 
 * 5. ARRAY METHODS:
 *    - .map(): transforms each item
 *    - .filter(): keeps items matching condition
 *    - .includes(): checks if string contains substring
 * 
 * 6. COMPONENT LIFECYCLE:
 *    Mount → useEffect runs → API call → setState → Re-render → Show data
 * 
 * 7. CONDITIONAL RENDERING:
 *    - if (error) return <ErrorUI />
 *    - Early return prevents further rendering
 *    - Shows different UI based on state
 */
