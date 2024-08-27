
import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div className="filter-panel">
      <button onClick={() => onChange('apply filter')}>Filter</button>
    </div>
  );
};

export default Filter;
