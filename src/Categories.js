import React from 'react';

const Categories = () => {
  return (
    <div className="btn-container">
      <button type="button" className="filter-btn active">all</button>
      <button type="button" className="filter-btn">mature plants</button>
      <button type="button" className="filter-btn">baby plants</button>
    </div>
  );
};

export default Categories;
