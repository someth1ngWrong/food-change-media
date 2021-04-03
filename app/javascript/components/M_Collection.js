import React from 'react'
import A_TextBodyCards from './A_TextBodyCards'

const M_Collection = ({ card }) => {
  return (
    <div className="card-block" style={{ background: card.backgroundColor}}>
      <div className="card-image-block">
        <img src={card.image} className="card-image"/>
      </div>
      <A_TextBodyCards name={card.name} />
    </div>
  )
}

export default M_Collection
