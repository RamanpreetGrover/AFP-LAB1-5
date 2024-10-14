import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ productName, productPrice, productDescription }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="product-card">
      <h2>{productName}</h2>
      <p><strong>Price:</strong> ${productPrice}</p>
      <button onClick={toggleDescription}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && <p className="description">{productDescription}</p>}
    </div>
  );
}

export default ProductCard;
