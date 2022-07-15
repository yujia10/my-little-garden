import './succulent-item.style.scss'

function SucculentItem({item}) {
  const {img,title} = item;
  return (
    <div className="plant-item">
      <img src={img} alt={title} className="photo"></img>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
        </header>
      </div>
    </div>
  );
}

export default SucculentItem;
