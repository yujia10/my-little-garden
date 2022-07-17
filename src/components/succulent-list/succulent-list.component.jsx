import SucculentItem from "../succulent-item/succulent-item.component";
import "./succulent-list.style.scss";

function SucculentList({ succulents }) {
  return (
    <div className="succulents-container">
      {succulents.map((succulent) => {
        return <SucculentItem key={succulent.id} succulent={succulent} />;
      })}
    </div>
  );
}

export default SucculentList;
