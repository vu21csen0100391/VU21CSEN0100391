
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../api/productsApi';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const productData = await getProductDetails(productId);
      setProduct(productData);
    };
    fetchDetails();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Brand: {product.company}</p>
      <p>Type: {product.category}</p>
      <p>Cost: ${product.price}</p>
      <p>Rating: {product.rating} stars</p>
      <p>Discount: {product.discount}% off</p>
      <p>Status: {product.availability ? 'Available' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetailsPage;
