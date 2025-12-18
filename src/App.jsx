/**
 * App Component - Root Component
 * 
 * PURPOSE: Entry point of the application
 * 
 * WHAT IT DOES:
 * - Sets up routing (if needed)
 * - Wraps pages with Layout (Header + Footer)
 * - Provides structure for entire app
 * 
 * REACT CONCEPTS:
 * 1. Component Tree: App → Layout → Pages → Components
 * 2. Component Composition: Building complex UI from simple parts
 * 3. Single Page Application: No page reloads on navigation
 * 
 * ARCHITECTURE:
 * - App.jsx: Root component
 * - Layout: Consistent structure (Header/Footer)
 * - Pages: Different views (Home, Shop, etc.)
 * - Components: Reusable UI pieces
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import './App.css';

/**
 * App Component
 * Root of the component tree
 */
function App() {
  return (
    // ROUTER SETUP
    // BrowserRouter enables client-side routing
    // No page refresh when navigating
    <Router>
      {/* LAYOUT WRAPPER
          Wraps all pages with consistent Header/Footer */}
      <Layout>
        {/* ROUTES
            Define different pages/views
            Currently only HomePage, can add more routes */}
        <Routes>
          {/* Home route - shows HomePage component */}
          <Route path="/" element={<HomePage />} />

          {/* Can add more routes:
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

/**
 * KEY CONCEPTS EXPLAINED:
 * 
 * 1. REACT ROUTER:
 *    - BrowserRouter: Enables routing in React
 *    - Routes: Container for all routes
 *    - Route: Defines path and component to render
 *    - Link: Navigate without page reload
 * 
 * 2. COMPONENT HIERARCHY:
 *    App
 *      └── Router
 *            └── Layout
 *                  ├── Header
 *                  ├── Routes
 *                  │     └── HomePage
 *                  │           ├── HeroBanner
 *                  │           └── ProductGrid (x5)
 *                  │                 └── ProductCard (multiple)
 *                  └── Footer
 * 
 * 3. SINGLE PAGE APPLICATION (SPA):
 *    - Only one HTML page loads
 *    - JavaScript changes content dynamically
 *    - Fast navigation (no page refresh)
 *    - Better user experience
 * 
 * 4. COMPONENT COMPOSITION:
 *    - Small, reusable components
 *    - Combine to create complex UI
 *    - Easy to maintain and test
 *    - Each component has single responsibility
 */
