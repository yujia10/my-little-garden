import "./succulent-item.style.scss";
import { Link } from "react-router-dom";

function SucculentItem({ succulent }) {
  const { id, img, title } = succulent;
  return (
    <div className="plant-item">
      <Link to={`${id}`} key={succulent.id}>
        <img src={img} alt={title} className="photo" />
      </Link>
      <div className="item-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default SucculentItem;
