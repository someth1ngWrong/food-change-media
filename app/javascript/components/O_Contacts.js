import React from 'react'
import A_Map from './A_Map'
import A_TextTitle from './A_TextTitle'
import instaIcon from 'images/insta_Icon.svg'
import contactIcon from 'images/contact_Icon.svg'
import mapIcon from 'images/map_Icon.svg'
import fbIcon from 'images/afb_Icon.svg'
import M_TextAndIcon from './M_TextAndIcon'
import A_Divider from './A_Divider'

const O_Contacts = () => {
  return (
    <>
      <div className="img-title author-spacing">
        <A_TextTitle title='Адреc и kонтaкты' />
      </div>
      <div className="main-map-container" style={{ padding: '20px', marginBottom: '400px', maxHeight: '400px' }}>
        <A_Map />
      </div>
      <div className="author-spacing">
        <M_TextAndIcon icon={mapIcon} text='Москва, Садовническая набережная 7 (ЦАО)' />
        <A_Divider />
        <M_TextAndIcon icon={contactIcon} text='+7 495 740-56-47' />
        <A_Divider />
        <M_TextAndIcon icon={instaIcon} text='@blau.msc' />
        <A_Divider />
        <M_TextAndIcon icon={fbIcon} text='BLAU' />
      </div>
    </>
  )
}

export default O_Contacts
