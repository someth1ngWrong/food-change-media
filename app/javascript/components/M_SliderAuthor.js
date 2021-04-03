import React from 'react'
import A_ImageAuthor from './A_ImageAuthor'
import A_SliderCounter from './A_SliderCounter'

const M_SliderAuthor = ({ imgSrc }) => {
  return (
    <div position='relative'>
      <A_ImageAuthor imgSrc={imgSrc} />
      <A_SliderCounter current={1} total={4} />
     </div>
  )
}

export default M_SliderAuthor
