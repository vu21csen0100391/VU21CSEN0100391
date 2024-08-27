
import React from 'react';

const Pagination = ({ onPageChange }) => {
  return (
    <div className="pagination-controls">
      <button onClick={() => onPageChange('next page')}>Next</button>
    </div>
  );
};

export default Pagination;
