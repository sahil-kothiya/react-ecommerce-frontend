/**
 * Footer Component
 * 
 * PURPOSE: Bottom section of the website that appears on every page
 * 
 * WHAT IT DOES:
 * - Displays company features (Free Shipping, Easy Return, etc.)
 * - Shows company information and links
 * - Displays copyright information
 * 
 * REACT CONCEPTS USED:
 * 1. Functional Component - Simple component without state
 * 2. Props - Could receive data from parent (not used here but could be)
 * 3. Reusability - Used on every page of the site
 * 
 * WHY THIS STRUCTURE?
 * - Separated from page content for maintainability
 * - Can be updated once and changes appear everywhere
 * - Follows DRY principle (Don't Repeat Yourself)
 */

import './Footer.css';

/**
 * Footer Component
 * No props needed as it displays static content
 */
const Footer = () => {
    return (
        <footer className="footer">
            {/* Features Section - Highlights company benefits */}
            <div className="footer-features">
                <div className="container">
                    <div className="features-grid">
                        {/* Feature Item 1 */}
                        <div className="feature-item">
                            <div className="feature-icon">🚚</div>
                            <div className="feature-content">
                                <h3>Free Shipping</h3>
                                <p>On orders over $50</p>
                            </div>
                        </div>

                        {/* Feature Item 2 */}
                        <div className="feature-item">
                            <div className="feature-icon">🔄</div>
                            <div className="feature-content">
                                <h3>Easy Return</h3>
                                <p>30-day return policy</p>
                            </div>
                        </div>

                        {/* Feature Item 3 */}
                        <div className="feature-item">
                            <div className="feature-icon">🔒</div>
                            <div className="feature-content">
                                <h3>Secure Payment</h3>
                                <p>100% secure payment</p>
                            </div>
                        </div>

                        {/* Feature Item 4 */}
                        <div className="feature-item">
                            <div className="feature-icon">💰</div>
                            <div className="feature-content">
                                <h3>Best Price</h3>
                                <p>Guaranteed best prices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info Column */}
                        <div className="footer-column">
                            <h3>Eshops</h3>
                            <p>Your one-stop shop for quality fashion and electronics.</p>
                        </div>

                        {/* Quick Links Column */}
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>

                        {/* Customer Service Column */}
                        <div className="footer-column">
                            <h4>Customer Service</h4>
                            <ul>
                                <li><a href="/help">Help Center</a></li>
                                <li><a href="/returns">Returns</a></li>
                                <li><a href="/shipping">Shipping Info</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="footer-column">
                            <h4>Contact Us</h4>
                            <p>📧 support@eshops.com</p>
                            <p>📞 +1 (555) 123-4567</p>
                            <p>📍 123 Shopping St, City</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2025 Eshops. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
