import './shop-card.style.scss'

function ShopCard({succulent}) {
  const {title,img,price} = succulent;
  return (
    <div className='card-container'>
      <img src={img} alt={title}/>
      <div className='footer'>
        <div className='name'>{title}</div>
        <div className='price'>${price}</div>
      </div>
      <button className='btn-primary'>Add To Cart</button>
    </div>
  )
}

export default ShopCard;
