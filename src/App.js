import React, { useState } from 'react';
import List from './List';
import Categories from './Categories';
import plants from './data';


function App() {
  const [plantItems, setPlantItems] = useState(plants)
  return (
    <main>
      <section className='plant-section'>
        <div className='title'>
          <h1>my succulents</h1>
          <div className='underline'></div>
        </div>
        <Categories />
        <List items={plantItems}/>
      </section>
    </main>
);
}

export default App;
