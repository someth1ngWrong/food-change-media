import React from 'react'
import A_TextCaption from './A_TextCaption'
import A_TextOVERLINE from './A_TextOVERLINE'

const M_TextInformation = ({label, info}) => {
  return (
    <div>
      <A_TextOVERLINE text={label} />
      <div className="img-info">
        <A_TextCaption name={info} />
      </div>
    </div>
  )
}

export default M_TextInformation
