import { useState } from "react";

import SucculentList from "../../components/succulent-list/succulent-list.component";
import Categories from "../../components/categories/categories.component";
import plants from "../../assets/succulents-data";

import "./succulents.style.scss";

function Succulents() {
  const filteredCategories = new Set(plants.map((plant) => plant.category));

  const [plantItems, setPlantItems] = useState(plants);
  const [categories, setCategories] = useState(["all", ...filteredCategories]);

  const filteredPlants = (category) => {
    if (category === "all") {
      setPlantItems(plants);
    } else {
      const newPlants = plants.filter((plant) => plant.category === category);
      setPlantItems(newPlants);
    }
  };
  return (
    <main>
      <div className="page-title">
        <h1>my succulents</h1>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filteredPlants={filteredPlants} />
      <SucculentList succulents={plantItems} />
    </main>
  );
}

export default Succulents;
