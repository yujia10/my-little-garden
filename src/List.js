import React from 'react';

const List = ({items})=>{
  return (
    <div className='section-center'>
      {items.map((item)=>{
        const {id, title, img } = item;
        return (
          <article key={id} className='plant-item'>
            <img src={img} alt={title} className='photo'></img>
            <div className='item-info'>
              <h4>{title}</h4>
              <p></p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List;
