import {Routes,Route} from 'react-router-dom'

import Navigation from './routes/navigation/navigation.route';
import Landing from './routes/landing/landing.route';
import Succulents from './routes/succulents/succulents.route';
import Shop from './routes/shop/shop.route';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Landing />} />
        <Route path='succulents' element={<Succulents />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
