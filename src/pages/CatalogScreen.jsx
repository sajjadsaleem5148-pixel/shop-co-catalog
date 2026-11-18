
import React from "react";
import ProductCard from "../components/ProductCard";
import "./CatalogScreen.css";

const products = [
  {
    id: 101,
    title: "Classic White Sneakers",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    discount: 20,
  },
  {
    id: 102,
    title: "Premium Black Headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    discount: 15,
  },
  {
    id: 103,
    title: "Modern Wrist Watch",
    price: 120.00,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 104,
    title: "Stylish Black Backpack",
    price: 45.50,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    discount: 10,
  },
  {
    id: 105,
    title: "Premium Sunglasses",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
  },
  {
    id: 106,
    title: "Casual Running Shoes",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    discount: 25,
  },
];

function CatalogScreen() {
  return (
    <main className="catalog-container">

      <header className="catalog-header">
        <h1>Shop.co Catalog</h1>
        <p>Discover our latest collection</p>
      </header>

      <section className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))}
      </section>

    </main>
  );
}

export default CatalogScreen;
