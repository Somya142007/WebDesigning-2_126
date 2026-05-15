import React from 'react';
import './App.css';

const ProductCard = ({ name, price, category, colorScheme }) => {
  return (
    <div className={`product-card ${colorScheme}`}>
      <h2>{name}</h2>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
};

function App() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics", color: "blue" },
    { id: 2, name: "Running Shoes", price: 2499, category: "Footwear", color: "green" },
    { id: 3, name: "Smart Watch", price: 3999, category: "Gadgets", color: "red" },
  ];

  return (
    <div className="container">
      <h1 className="title">Product Showcase</h1>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            colorScheme={product.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;