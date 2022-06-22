import React from 'react';
import { MdOutlineWaterDrop, MdWaterDrop, MdOutlineEventNote } from 'react-icons/md'



const List = ({items})=>{
  return (
    <div className='section-container'>
      {items.map((item)=>{
        const {id, title, img } = item;
        return (
          <article key={id} className='plant-item'>
            <img src={img} alt={title} className='photo'></img>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
              </header>
              <p className='action'>
                <button className='item-btn'><MdOutlineWaterDrop /></button>
                <button className='item-btn'><MdOutlineEventNote /></button>
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List;
