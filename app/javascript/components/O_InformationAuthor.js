import React from 'react'
import A_TextOVERLINE from './A_TextOVERLINE'
import A_TextTitle from './A_TextTitle'
import M_TextInformation from './M_TextInformation'

const O_InformationAuthor = () => {
  return (
    <div>
      <div className="img-title">
        <A_TextTitle title='Пoдробhее'/>
      </div>
      <M_TextInformation label='Совместимость' info='Подходит для вегетарианцев, для веганов' />
      <M_TextInformation label='ДиапАзон цен' info='300 ₽ – 1 500 ₽' />
      <M_TextInformation label='Тип кухни' info='Ближневосточная' />
    </div>
  )
}

export default O_InformationAuthor
