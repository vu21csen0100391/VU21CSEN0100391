
import React from 'react';

const Sort = ({ onChange }) => {
  return (
    <div className="sort-panel">
      <button onClick={() => onChange('apply sort')}>Sort</button>
    </div>
  );
};

export default Sort;
