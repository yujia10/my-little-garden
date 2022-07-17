import { useParams } from "react-router-dom";
import plants from "../../assets/succulents-data";
import "./succulent.style.scss";

function Succulent() {
  const { id } = useParams();

  const succulent = plants.find((plant) => plant.id === parseInt(id));
  const { title, img, info } = succulent;
  console.log(img);
  return (
    <main>
    <div className="detail-container">
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="page-title">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      </div>
    </main>
  );
}

export default Succulent;
