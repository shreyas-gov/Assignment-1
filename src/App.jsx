import {Navbar} from "./components/Navbar";
import {ProductCard} from "./components/ProductCard";
import {Footer} from "./components/Footer";
import "./App.css";
import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: "$999",
      image: "https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-desk-gtZxq2Rpa_Y"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$149",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$49",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    }
  ];

  return (
    <>
      <Navbar />
  
      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
