# React E-commerce Frontend 🛒

A modern, professional e-commerce application built with **React** and **Vite**. This project demonstrates best practices in React development with a clean architecture, detailed documentation, and beginner-friendly explanations.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Key Concepts](#key-concepts)
- [Component Architecture](#component-architecture)
- [API Integration](#api-integration)
- [Styling Approach](#styling-approach)
- [Learning Resources](#learning-resources)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, responsive interface matching professional e-commerce sites
- 📦 **Product Catalog** - Display products by categories (All, Men's, Women's, Electronics, Accessories)
- 🏷️ **Product Cards** - Interactive cards with images, prices, ratings, and badges
- 🛍️ **Shopping Features** - Add to cart functionality, product details
- 🎯 **Hero Banner** - Eye-catching promotional banner
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔄 **Loading States** - Proper handling of async operations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎓 **Beginner Friendly** - Extensive comments and documentation

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.2.4** - Next-generation frontend tooling
- **React Router DOM 7.1.1** - Client-side routing
- **Axios 1.7.9** - HTTP client for API requests

### Development Tools
- **ESLint** - Code quality and consistency
- **CSS3** - Custom styling (no external CSS frameworks)

## 📁 Project Structure

```
react-ecommerce-frontend/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Layout components
│   │   │   ├── Header.jsx   # Navigation header
│   │   │   ├── Footer.jsx   # Page footer
│   │   │   ├── Layout.jsx   # Layout wrapper
│   │   │   └── HeroBanner.jsx # Promotional banner
│   │   └── product/         # Product-related components
│   │       ├── ProductCard.jsx  # Individual product card
│   │       └── ProductGrid.jsx  # Product grid layout
│   ├── pages/               # Page components
│   │   └── HomePage.jsx     # Main landing page
│   ├── services/            # API integration
│   │   └── apiService.js    # API calls to FakeStore API
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions (future)
│   ├── App.jsx              # Root component
│   ├── App.css              # App-level styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global CSS reset & variables
├── public/                  # Static assets
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

### Why This Structure?

**Separation of Concerns**: Each folder has a specific purpose
- `components/` - Reusable UI pieces
- `pages/` - Full page views
- `services/` - Business logic & API calls
- `utils/` - Helper functions

**Scalability**: Easy to add new features
- New component? Add to appropriate folder
- New page? Create in `pages/`
- New API? Add to `services/`

**Maintainability**: Easy to find and update code
- Related files grouped together
- Clear naming conventions
- Consistent organization

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahil-kothiya/react-ecommerce-frontend.git
   cd react-ecommerce-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Key Concepts

### 1. React Functional Components

Modern way to write React components using functions instead of classes.

```jsx
function MyComponent() {
  return <div>Hello World!</div>;
}
```

**Why Functional?**
- Simpler syntax
- Easier to read and test
- Hooks enable state and lifecycle
- Better performance

### 2. React Hooks

Hooks let you use state and other React features in functional components.

#### useState
Manages component state (data that changes).

```jsx
const [count, setCount] = useState(0);
// count: current value
// setCount: function to update count
// 0: initial value
```

#### useEffect
Runs side effects (API calls, subscriptions).

```jsx
useEffect(() => {
  // This code runs after component renders
  fetchData();
}, []); // Empty array = run once on mount
```

### 3. Props

Data passed from parent to child component.

```jsx
// Parent passes data
<ProductCard product={productData} />

// Child receives data
function ProductCard({ product }) {
  return <div>{product.title}</div>;
}
```

**Think of props like function parameters**

### 4. Component Composition

Building complex UIs from simple components.

```
App
  └── Layout
        ├── Header
        ├── HomePage
        │     ├── HeroBanner
        │     └── ProductGrid
        │           └── ProductCard (x many)
        └── Footer
```

### 5. Array Mapping

Transform array of data into array of components.

```jsx
products.map(product => (
  <ProductCard key={product.id} product={product} />
))
```

**Key prop is required** - helps React track changes efficiently.

### 6. Async/Await

Handle asynchronous operations (API calls).

```jsx
const fetchData = async () => {
  try {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  } catch (error) {
    console.error(error);
  }
};
```

**Async makes code look synchronous** - easier to read than callbacks.

## 🏗️ Component Architecture

### Layout Components

#### Header (`Header.jsx`)
- **Purpose**: Navigation and branding
- **Features**: Logo, search bar, cart icon, navigation links
- **State**: Search query

#### Footer (`Footer.jsx`)
- **Purpose**: Footer information
- **Features**: Company info, links, contact details
- **State**: None (stateless)

#### Layout (`Layout.jsx`)
- **Purpose**: Consistent page structure
- **Features**: Wraps pages with Header & Footer
- **Props**: `children` (page content)

### Product Components

#### ProductCard (`ProductCard.jsx`)
- **Purpose**: Display single product
- **Props**: 
  - `product` - Product object with title, price, image, rating
- **Features**: 
  - Product image
  - Title (truncated to 2 lines)
  - Star rating
  - Price display
  - Sale badges (40% OFF, NEW, HOT)
  - Add to Cart button

#### ProductGrid (`ProductGrid.jsx`)
- **Purpose**: Display multiple products in grid
- **Props**:
  - `title` - Section title
  - `products` - Array of products
  - `loading` - Loading state
- **Features**:
  - Responsive grid layout
  - Loading state
  - Empty state handling

### Page Components

#### HomePage (`HomePage.jsx`)
- **Purpose**: Main landing page
- **State**:
  - `allProducts` - All products from API
  - `loading` - Loading status
  - `error` - Error messages
- **Features**:
  - Hero banner
  - Multiple product sections by category
  - API data fetching
  - Error handling

## 🔌 API Integration

### FakeStore API

We use [FakeStore API](https://fakestoreapi.com) - a free fake REST API for e-commerce.

**Endpoints Used:**
- `GET /products` - Get all products
- `GET /products/category/:category` - Get products by category
- `GET /products/:id` - Get single product

### API Service (`apiService.js`)

Centralized API logic for maintainability.

```javascript
// Usage in component
const products = await apiService.getAllProducts();
```

**Benefits:**
- Single source of truth
- Easy to update API endpoints
- Consistent error handling
- Reusable across components

## 🎨 Styling Approach

### CSS Architecture

We use **vanilla CSS** with a structured approach:

1. **Global Styles** (`index.css`)
   - CSS reset
   - CSS variables
   - Base typography
   - Utility classes

2. **Component Styles** (`.css` files)
   - Co-located with components
   - Component-specific styling
   - BEM-like naming

### CSS Variables

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #2c3e50;
  --accent-color: #667eea;
}
```

**Benefits:**
- Consistent theming
- Easy to update colors globally
- Better maintainability

### Responsive Design

Mobile-first approach using media queries:

```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

## 📚 Learning Resources

### React Fundamentals
- [Official React Documentation](https://react.dev/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

### JavaScript Concepts
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### CSS
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 🤝 Contributing

This is a learning project. Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Ask questions

## 📝 License

MIT License - feel free to use this project for learning!

## 👨‍💻 Author

**Sahil Kothiya**
- GitHub: [@sahil-kothiya](https://github.com/sahil-kothiya)

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com) for free fake e-commerce data
- React team for amazing documentation
- Vite team for fast development experience

---

**Happy Learning! 🚀**

If you found this helpful, please give it a ⭐
