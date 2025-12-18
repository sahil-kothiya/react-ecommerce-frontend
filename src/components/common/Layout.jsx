/**
 * Layout Component
 * 
 * PURPOSE: Wrapper component that provides consistent layout structure
 * 
 * WHAT IT DOES:
 * - Wraps all pages with Header and Footer
 * - Ensures consistent look across all pages
 * - Uses "children" prop to render page content
 * 
 * REACT CONCEPTS USED:
 * 1. Props.children - Special prop that passes nested content
 * 2. Component Composition - Building complex UI from simple components
 * 3. Reusable Layout Pattern - Common React pattern
 * 
 * HOW IT WORKS:
 * When you write: <Layout><HomePage /></Layout>
 * The HomePage component becomes the "children" prop
 * Layout renders: Header + children + Footer
 * 
 * WHY USE THIS?
 * - Avoids repeating Header/Footer in every page
 * - Single place to update layout
 * - Cleaner, more maintainable code
 */

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render between header and footer
 */
const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* Header appears on top */}
            <Header />

            {/* Main content area - this is where page content goes */}
            {/* "children" will be whatever component is wrapped by Layout */}
            <main className="main-content">
                {children}
            </main>

            {/* Footer appears at bottom */}
            <Footer />
        </div>
    );
};

export default Layout;

/**
 * USAGE EXAMPLE:
 * 
 * import Layout from './components/common/Layout';
 * import HomePage from './pages/HomePage';
 * 
 * function App() {
 *   return (
 *     <Layout>
 *       <HomePage />
 *     </Layout>
 *   );
 * }
 * 
 * Result: Header -> HomePage content -> Footer
 */
