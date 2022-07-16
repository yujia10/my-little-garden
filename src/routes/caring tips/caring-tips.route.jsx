import data from "../../assets/caring-tips-data";
import Tip from "../../components/tip/tip.component";

import './caring-tips.style.scss'

function CaringTips() {

  return (
    <main>
      <div className="page-title">
        <h1>Caring Tips</h1>
        <div className="underline"></div>
      </div>
      <div className="tips-container">
        <section className="info">
          {data.map((tip) => {
            return (
              <Tip key={tip.id} tip={tip}></Tip>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default CaringTips;
