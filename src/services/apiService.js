/**
 * API Service
 * 
 * PURPOSE: Handles all API calls to fetch product data
 * 
 * WHAT IT DOES:
 * - Connects to FakeStore API (free fake e-commerce API)
 * - Fetches product data
 * - Handles errors gracefully
 * - Provides clean interface for components
 * 
 * WHY SEPARATE FILE?
 * - Separation of Concerns: Keep API logic separate from UI
 * - Reusability: Use same functions across components
 * - Maintainability: Change API in one place
 * - Testing: Easier to test independently
 * 
 * AXIOS vs FETCH:
 * - Axios automatically converts JSON
 * - Better error handling
 * - Request/response interceptors
 * - Cleaner syntax
 * 
 * API ENDPOINT:
 * https://fakestoreapi.com - Free fake e-commerce API
 * No authentication required
 * Returns realistic product data
 */

import axios from 'axios';

// Base URL for all API requests
const API_BASE_URL = 'https://fakestoreapi.com';

// Create axios instance with default config
// This is better than using axios directly
// Can add headers, timeout, interceptors, etc.
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * API Service Object
 * Contains all API-related functions
 * Export as object for organized imports
 */
const apiService = {
    /**
     * Get all products
     * @returns {Promise<Array>} Array of product objects
     */
    getAllProducts: async () => {
        try {
            // ASYNC/AWAIT EXPLANATION:
            // - async makes function return a Promise
            // - await waits for Promise to resolve
            // - Makes async code look synchronous
            // - Easier to read than .then().catch()

            const response = await apiClient.get('/products');
            // response.data contains the actual product data
            return response.data;
        } catch (error) {
            // ERROR HANDLING
            // Catch any errors (network, server, etc.)
            console.error('Error fetching all products:', error);
            // Throw error so component can handle it
            throw new Error('Failed to fetch products');
        }
    },

    /**
     * Get products by category
     * @param {string} category - Category name (e.g., "electronics", "men's clothing")
     * @returns {Promise<Array>} Array of products in category
     */
    getProductsByCategory: async (category) => {
        try {
            const response = await apiClient.get(`/products/category/${category}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${category} products:`, error);
            throw new Error(`Failed to fetch ${category} products`);
        }
    },

    /**
     * Get all categories
     * @returns {Promise<Array>} Array of category names
     */
    getCategories: async () => {
        try {
            const response = await apiClient.get('/products/categories');
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw new Error('Failed to fetch categories');
        }
    },

    /**
     * Get single product by ID
     * @param {number} id - Product ID
     * @returns {Promise<Object>} Product object
     */
    getProductById: async (id) => {
        try {
            const response = await apiClient.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw new Error('Failed to fetch product details');
        }
    },

    /**
     * Get limited number of products
     * Useful for homepage featured products
     * @param {number} limit - Number of products to fetch
     * @returns {Promise<Array>} Array of products
     */
    getLimitedProducts: async (limit = 10) => {
        try {
            const response = await apiClient.get(`/products?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching limited products:', error);
            throw new Error('Failed to fetch products');
        }
    },
};

// Export for use in components
export default apiService;

/**
 * USAGE EXAMPLE IN COMPONENT:
 * 
 * import apiService from './services/apiService';
 * 
 * function MyComponent() {
 *   const [products, setProducts] = useState([]);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchProducts = async () => {
 *       try {
 *         const data = await apiService.getAllProducts();
 *         setProducts(data);
 *       } catch (error) {
 *         console.error(error);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 * 
 *     fetchProducts();
 *   }, []);
 * 
 *   return <div>{...render products...}</div>;
 * }
 * 
 * KEY CONCEPTS:
 * 
 * 1. ASYNC/AWAIT:
 *    - Function marked as "async"
 *    - Use "await" before Promise
 *    - Wait for result before continuing
 *    - Cleaner than callbacks or .then()
 * 
 * 2. TRY/CATCH:
 *    - try { } - Code that might fail
 *    - catch(error) { } - Handle errors
 *    - finally { } - Runs regardless (optional)
 * 
 * 3. PROMISES:
 *    - Represents future value
 *    - Three states: pending, fulfilled, rejected
 *    - await waits for promise to resolve
 * 
 * 4. API ARCHITECTURE:
 *    - All API calls in one place
 *    - Components don't know API details
 *    - Easy to switch APIs later
 *    - Consistent error handling
 */
