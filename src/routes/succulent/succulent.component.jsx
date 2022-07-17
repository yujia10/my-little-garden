import { useParams } from "react-router-dom";
import plants from "../../assets/succulents-data";

import { useNavigate } from "react-router-dom";

import "./succulent.style.scss";

function Succulent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const backToList = ()=>{
    navigate('/succulents')
  }

  const succulent = plants.find((plant) => plant.id === parseInt(id));
  const { title, img, info } = succulent;
  console.log(img);
  return (
    <main>
    <div className="detail-container">
    <button className="btn-primary btn-back" onClick={backToList}>BACK</button>
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
