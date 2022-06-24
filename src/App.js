import React, { useState } from 'react';
import List from './List';
import Categories from './Categories';
import plants from './data';

const filteredCategories = new Set(plants.map((plant)=>plant.category))
function App() {
  const [plantItems, setPlantItems] = useState(plants)
  const [categories, setCategories] = useState(['all', ...filteredCategories])

  const filteredPlants = (category) => {
    if(category === 'all'){
      setPlantItems(plants)
    } else {
      const newPlants = plants.filter((plant)=>plant.category === category);
      setPlantItems(newPlants)
    }
  }
  return (
    <main>
      <section className='plant-section'>
        <div className='title'>
          <h1>my succulents</h1>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filteredPlants={filteredPlants}/>
        <List items={plantItems}/>
      </section>
    </main>
);
}

export default App;
