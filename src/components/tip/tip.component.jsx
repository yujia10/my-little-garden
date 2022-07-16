import {useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

import './tip.style.scss'

function Tip({tip}) {
  const {title,info} = tip;
  const [showInfo, setShowInfo] = useState(false);

  const showInfoHandler = () => {
    setShowInfo(!showInfo)
  }

  return (
    <section className='tip'>
      <div className='tip-header'>
        <h3>{title}</h3>
        <button className='btn' onClick={showInfoHandler}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </section>
  )
}

export default Tip
