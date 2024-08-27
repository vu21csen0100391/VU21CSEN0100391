
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-overview">
      <h2>{product.name}</h2>
      <p>Brand: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
