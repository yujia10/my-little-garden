
import './succulent-list.style.scss'

function SucculentList({items}) {
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
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default SucculentList
