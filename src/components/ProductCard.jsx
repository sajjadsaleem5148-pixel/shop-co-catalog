
import React from "react";
import "./ProductCard.css";

function ProductCard({ item }) {
  const handleProductClick = () => {
    alert("Product Selected: ID: " + item.id);
  };

  return (
    <button
      type="button"
      className="product-card"
      onClick={handleProductClick}
      aria-label={`Select ${item.title}, ID ${item.id}`}
    >
      <div className="product-image-container">
        <img
          src={item.image}
          alt={item.title}
          className="product-image"
        />

        {item.discount && (
          <span className="discount-badge">
            -{item.discount}%
          </span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">
          {item.title}
        </h3>

        <p className="product-price">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </button>
  );
}

export default ProductCard;
