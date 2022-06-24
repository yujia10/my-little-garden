import React from 'react';

const Categories = ({categories, filteredPlants}) => {
  return (
    <div className="btn-container">
      {categories.map((item,index)=>{
        return <button type="button" key={index} className="filter-btn" onClick={()=>filteredPlants(item)}>{item}</button>
      })}


    </div>
  );
};

export default Categories;
