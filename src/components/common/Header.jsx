/**
 * Header Component
 * 
 * PURPOSE: This is the navigation header that appears at the top of every page
 * 
 * WHAT IT DOES:
 * - Displays the logo/brand name
 * - Shows navigation links (Shop, About, Contact)
 * - Provides search functionality
 * - Shows cart and user account icons
 * 
 * REACT CONCEPTS USED:
 * 1. Functional Component - Modern way to create components (simpler than class components)
 * 2. useState Hook - Manages component state (search query in this case)
 * 3. Link from react-router - Navigates between pages WITHOUT page reload
 * 
 * WHY FUNCTIONAL COMPONENT?
 * - Easier to read and write
 * - Better performance
 * - Hooks make state management simple
 * - This is the recommended modern React approach
 */

import { useState } from 'react'; // Import useState hook for managing state
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; // Import component-specific styles

/**
 * Header function component
 * Returns JSX (JavaScript XML) - looks like HTML but is actually JavaScript
 */
const Header = () => {
    // STATE MANAGEMENT
    // useState returns an array: [currentValue, functionToUpdateValue]
    // searchQuery: stores what user types in search box
    // setSearchQuery: function to update searchQuery
    // useState(''): initial value is empty string
    const [searchQuery, setSearchQuery] = useState('');

    /**
     * handleSearch function
     * Called when user submits the search form
     * @param {Event} e - The form submit event
     */
    const handleSearch = (e) => {
        e.preventDefault(); // Prevents page reload on form submit
        console.log('Searching for:', searchQuery); // Log search query
        // TODO: Implement actual search functionality
    };

    // JSX RETURN
    // This is what gets rendered on the screen
    return (
        <header className="header">
            {/* Top bar with logo and search */}
            <div className="header-top">
                <div className="container">
                    {/* Logo/Brand Name - Link to home page */}
                    <Link to="/" className="logo">
                        <h1>Eshops</h1>
                    </Link>

                    {/* Search Form */}
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery} // Controlled input - React controls the value
                            onChange={(e) => setSearchQuery(e.target.value)} // Update state on every keystroke
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </form>

                    {/* User Actions - Cart and Account */}
                    <div className="header-actions">
                        <button className="icon-button">
                            🛒 <span className="cart-count">0</span>
                        </button>
                        <button className="icon-button">
                            👤
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="header-nav">
                <div className="container">
                    <ul className="nav-list">
                        {/* Link vs <a> tag:
                - Link doesn't reload the page
                - Link is faster (Single Page Application)
                - <a> would cause full page reload */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

// Export so other components can import and use this Header
export default Header;
