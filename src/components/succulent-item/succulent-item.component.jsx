import "./succulent-item.style.scss";

function SucculentItem({ item }) {
  const { img, title } = item;
  return (
    <div className="plant-item">
      <img src={img} alt={title} className="photo"></img>
      <div className="item-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default SucculentItem;
