import SucculentItem from '../succulent-item/succulent-item.component';
import './succulent-list.style.scss'

function SucculentList({items}) {
  return (
    <div className='section-container'>
      {items.map((item)=>{
        return <SucculentItem key={item.id} item={item}/>
      })}
    </div>
  )
}

export default SucculentList
