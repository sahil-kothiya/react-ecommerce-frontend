/**
 * ProductGrid Component
 * 
 * PURPOSE: Displays multiple products in a responsive grid layout
 * 
 * WHAT IT DOES:
 * - Shows section title (e.g., "Men's Fashion", "Electronics")
 * - Renders multiple ProductCard components in a grid
 * - Handles loading states
 * - Shows message when no products available
 * 
 * REACT CONCEPTS USED:
 * 1. Props - Receives products array and section title
 * 2. Array.map() - Transforms array of data into array of components
 * 3. Key Prop - Helps React identify which items changed
 * 4. Conditional Rendering - Shows different UI based on state
 * 
 * HOW ARRAY.MAP() WORKS:
 * - Takes each item in array
 * - Runs function on each item
 * - Returns new array with results
 * - Example: [1,2,3].map(n => n * 2) returns [2,4,6]
 * 
 * WHY USE KEY PROP?
 * - React needs to identify each element uniquely
 * - Helps React update efficiently (only changes what's different)
 * - Without key, React re-renders everything (slower)
 * - Use unique, stable identifier (ID, not index if items can reorder)
 */

import ProductCard from './ProductCard';
import './ProductGrid.css';

/**
 * ProductGrid Component
 * @param {Object} props - Component props
 * @param {string} props.title - Section title (e.g., "Men's Fashion")
 * @param {Array} props.products - Array of product objects
 * @param {boolean} props.loading - Loading state
 */
const ProductGrid = ({ title, products = [], loading = false }) => {
    // LOADING STATE
    // Show loading message while data is being fetched
    if (loading) {
        return (
            <section className="product-grid-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="loading-message">
                        <p>Loading products...</p>
                    </div>
                </div>
            </section>
        );
    }

    // EMPTY STATE
    // Show message when no products available
    if (!products || products.length === 0) {
        return (
            <section className="product-grid-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="empty-message">
                        <p>No products available in this category.</p>
                    </div>
                </div>
            </section>
        );
    }

    // MAIN RENDER
    // Show products in grid when data is available
    return (
        <section className="product-grid-section">
            <div className="container">
                {/* Section Title */}
                {title && <h2 className="section-title">{title}</h2>}

                {/* Products Grid */}
                <div className="product-grid">
                    {/* ARRAY.MAP() EXPLANATION:
              - products is an array: [product1, product2, product3, ...]
              - .map() goes through each product
              - For each product, creates a <ProductCard /> component
              - Returns array of components: [<ProductCard />, <ProductCard />, ...]
              - React renders all components in the array
          */}
                    {products.map((product) => (
                        // KEY PROP is REQUIRED in lists
                        // Helps React track which items changed
                        // Must be unique for each item
                        <ProductCard
                            key={product.id}  // Unique identifier
                            product={product}  // Pass entire product object as prop
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;

/**
 * DETAILED BREAKDOWN:
 * 
 * 1. DEFAULT PROPS:
 *    - products = []
 *    - If parent doesn't pass products, defaults to empty array
 *    - Prevents errors when trying to use products.length or products.map()
 * 
 * 2. CONDITIONAL RENDERING PATTERNS:
 *    a) Early Return Pattern:
 *       if (loading) return <LoadingUI />
 *       - Exits function early if condition is true
 *       - Cleaner than nested if/else
 * 
 *    b) Logical AND:
 *       {title && <h2>{title}</h2>}
 *       - Shows h2 only if title exists
 * 
 * 3. ARRAY.MAP() WITH JSX:
 *    - products.map(product => <Component />)
 *    - Creates component for each array item
 *    - Must include unique "key" prop
 *    - Returns array of components
 * 
 * 4. PROPS PASSING:
 *    - product={product}
 *    - Passes entire object to child
 *    - Child can access: props.product.id, props.product.title, etc.
 * 
 * USAGE EXAMPLE:
 * <ProductGrid 
 *   title="Men's Fashion"
 *   products={menProducts}
 *   loading={isLoading}
 * />
 */
