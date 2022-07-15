import { createContext, useState } from 'react';

import shopData from '../assets/shop-data';

export const ShopSucculentsContext = createContext({
  succulentsForShop:[]
})

export const ShopSucculentsProvider = ({children})=>{
  const [succulentsForShop, setSucculentsForShop] = useState(shopData);
  const value={succulentsForShop}
  return (
    <ShopSucculentsContext.Provider value={value}>{children}</ShopSucculentsContext.Provider>
  )
}
