/**
 * HeroBanner Component
 * 
 * PURPOSE: Eye-catching promotional banner at the top of homepage
 * 
 * WHAT IT DOES:
 * - Displays special offers and promotions
 * - Attracts user attention with bold text and colors
 * - Includes call-to-action button
 * 
 * REACT CONCEPTS USED:
 * 1. Functional Component
 * 2. Props - Accepts customizable text for different promotions
 * 3. Event Handlers - Button click handling
 * 
 * WHY USE PROPS?
 * - Makes component reusable with different offers
 * - Can change promotion text without changing code
 * - Component becomes flexible and dynamic
 */

import './HeroBanner.css';

/**
 * HeroBanner Component
 * @param {Object} props - Component properties
 * @param {string} props.title - Main promotional text
 * @param {string} props.discount - Discount percentage
 * @param {string} props.buttonText - CTA button text
 */
const HeroBanner = ({
    title = "Special Offer",  // Default value if no prop provided
    discount = "Up to 40% OFF",
    buttonText = "Shop Now"
}) => {
    /**
     * Handle button click
     * In real app, this would navigate to shop page or specific deals
     */
    const handleShopNow = () => {
        console.log('Navigating to shop...');
        // TODO: Implement navigation or scroll to products
    };

    return (
        <section className="hero-banner">
            <div className="container">
                <div className="hero-content">
                    {/* Left side - Text content */}
                    <div className="hero-text">
                        <h2 className="hero-title">{title}</h2>
                        <p className="hero-discount">{discount}</p>
                        <button
                            className="hero-button"
                            onClick={handleShopNow}
                        >
                            {buttonText}
                        </button>
                    </div>

                    {/* Right side - Image */}
                    <div className="hero-image">
                        {/* In production, replace with actual image */}
                        <div className="image-placeholder">
                            <span>🛍️</span>
                            <p>Product Showcase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;

/**
 * COMPONENT BREAKDOWN:
 * 
 * 1. PROPS WITH DEFAULT VALUES:
 *    - If parent doesn't pass props, defaults are used
 *    - Makes component work even without props
 *    - Syntax: { propName = "default" }
 * 
 * 2. EVENT HANDLER:
 *    - onClick={handleShopNow} attaches function to button
 *    - Function runs when button is clicked
 *    - Arrow function () => {} is modern JavaScript syntax
 * 
 * 3. JSX INTERPOLATION:
 *    - {title}, {discount}, {buttonText} insert prop values
 *    - Curly braces {} mean "execute JavaScript"
 *    - Values update automatically when props change
 * 
 * USAGE EXAMPLE:
 * <HeroBanner 
 *   title="Summer Sale"
 *   discount="50% OFF"
 *   buttonText="Get Deals"
 * />
 */
