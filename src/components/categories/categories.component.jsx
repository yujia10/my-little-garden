import {useState} from 'react'
import './categories.style.scss'

function Categories({categories, filteredPlants}) {
  const [value, setValue] = useState(0);

  return (
    <div className="btn-container">
      {categories.map((item,index)=>{
        return <button
                type="button"
                key={index}
                className={`filter-btn ${index === value && 'btn-active'}`}
                onClick={()=>{
                  filteredPlants(item);
                  setValue(index)
                }}>
                  {item}
                </button>
      })}


    </div>
  );
}

export default Categories
