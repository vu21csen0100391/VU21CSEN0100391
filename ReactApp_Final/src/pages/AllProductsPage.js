
import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await getProducts();
      setProducts(productData);
      setDisplayedProducts(productData);
    };
    fetchProductData();
  }, []);

  const applyFilter = (filters) => {
    // Apply filtering logic
  };

  const applySort = (sortCriteria) => {
    // Apply sorting logic
  };

  const changePage = (pageNumber) => {
    // Change pagination logic
  };

  return (
    <div>
      <Filter onChange={applyFilter} />
      <Sort onChange={applySort} />
      <div className="product-list">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination onPageChange={changePage} />
    </div>
  );
};

export default AllProductsPage;
