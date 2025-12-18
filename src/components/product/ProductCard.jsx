/**
 * ProductCard Component
 * 
 * PURPOSE: Displays individual product information in a card layout
 * 
 * WHAT IT DOES:
 * - Shows product image, title, price, rating
 * - Displays sale badges (40% OFF, NEW, etc.)
 * - Provides "Add to Cart" button
 * - Handles user interactions
 * 
 * REACT CONCEPTS USED:
 * 1. Props - Receives product data from parent component
 * 2. Conditional Rendering - Shows badges only if applicable
 * 3. Event Handlers - Handles button clicks
 * 4. Component Reusability - Used for every product
 * 
 * HOW PROPS WORK:
 * - Parent passes data: <ProductCard product={productData} />
 * - Component receives data in "props" parameter
 * - Destructuring extracts product: { product }
 * - Access properties: product.title, product.price, etc.
 * 
 * WHY THIS APPROACH?
 * - One component displays all products
 * - Data-driven UI (UI changes based on data)
 * - Easy to maintain and update
 */

import './ProductCard.css';

/**
 * ProductCard Component
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {number} props.product.id - Product ID
 * @param {string} props.product.title - Product name
 * @param {number} props.product.price - Product price
 * @param {string} props.product.image - Product image URL
 * @param {Object} props.product.rating - Rating object
 * @param {number} props.product.rating.rate - Rating value (0-5)
 * @param {number} props.product.rating.count - Number of ratings
 * @param {string} props.product.badge - Badge text (optional)
 * @param {string} props.product.badgeType - Badge color type (optional)
 */
const ProductCard = ({ product }) => {
    /**
     * Handle Add to Cart button click
     * @param {Event} e - Click event
     */
    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent any default action
        console.log('Adding to cart:', product.title);
        // TODO: Implement actual cart functionality
        alert(`Added "${product.title}" to cart!`);
    };

    /**
     * Generate star rating display
     * @param {number} rating - Rating value (0-5)
     * @returns {string} - Star icons
     */
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars
        const hasHalfStar = rating % 1 !== 0; // Check for half star
        let stars = '';

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '⭐';
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars += '⭐';
        }

        return stars || '☆☆☆☆☆'; // Return empty stars if no rating
    };

    return (
        <div className="product-card">
            {/* Badge - Only shown if product has badge property */}
            {/* CONDITIONAL RENDERING: {condition && <element>} */}
            {/* Shows element only if condition is true */}
            {product.badge && (
                <span className={`product-badge ${product.badgeType || 'sale'}`}>
                    {product.badge}
                </span>
            )}

            {/* Product Image */}
            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy" // Lazy loading improves performance
                />
            </div>

            {/* Product Details */}
            <div className="product-details">
                {/* Product Title - Limited to 2 lines */}
                <h3 className="product-title">{product.title}</h3>

                {/* Rating Section */}
                <div className="product-rating">
                    <span className="stars">
                        {renderStars(product.rating?.rate || 0)}
                    </span>
                    <span className="rating-count">
                        ({product.rating?.count || 0})
                    </span>
                </div>

                {/* Price Section */}
                <div className="product-price">
                    {/* TEMPLATE LITERAL: `$${value}` */}
                    {/* Combines string with variable */}
                    <span className="current-price">${product.price}</span>

                    {/* Show original price if there's a discount */}
                    {product.originalPrice && (
                        <span className="original-price">${product.originalPrice}</span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

/**
 * KEY CONCEPTS EXPLAINED:
 * 
 * 1. PROPS DESTRUCTURING:
 *    - const ProductCard = ({ product }) => { }
 *    - Extracts "product" from props object
 *    - Cleaner than: const ProductCard = (props) => { props.product }
 * 
 * 2. OPTIONAL CHAINING (?.):
 *    - product.rating?.rate
 *    - Safely accesses nested properties
 *    - Returns undefined if rating doesn't exist (no error)
 * 
 * 3. LOGICAL AND (&&):
 *    - {product.badge && <span>...}
 *    - If product.badge is truthy, render span
 *    - If false/null/undefined, render nothing
 * 
 * 4. TEMPLATE LITERALS (`${}`):
 *    - `product-badge ${product.badgeType}`
 *    - Combines static and dynamic strings
 *    - Result: "product-badge sale" or "product-badge new"
 * 
 * 5. EVENT HANDLERS:
 *    - onClick={handleAddToCart}
 *    - Executes function when button is clicked
 *    - Can access product data inside function (closure)
 */
