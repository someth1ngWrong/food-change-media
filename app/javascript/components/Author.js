import React from 'react'
import MapContainer from './MapContainer'
import authorLogo from 'images/A_LogoAuthor.svg'
import authorImage from 'images/author_image.png'
import instaIcon from 'images/insta_Icon.svg'
import contactIcon from 'images/contact_Icon.svg'
import mapIcon from 'images/map_Icon.svg'
import fbIcon from 'images/afb_Icon.svg'
import OFooter from './OFooter'

const Author = () => {
  return (
    <>
      <div className="main-author-screen">
        <div className="author-spacing">
          <p className="main-author-text">Рецепт • BLAU</p>
          <div className="main-label-conainer">
            <img src={authorLogo} />
            <div className="author-main-label">BLAU</div>
          </div>
          <a className="author-short-desc">Рецепты автора</a>
          <div className="author-long-desc">
            Небольшой ресторан с ближневосточной кухней открылся на Садовнической набережной 24 июля и моментально попал в инстаграмы всех любителей новых мест в городе — барная стойка глубокого синего цвета на фоне охровых стен будто бы специально была создана для кадров в социальных сетях.
          </div>
        </div>
        <img src={authorImage} width="100%" height="100%" />
        <div className="author-spacing">
          <div className="img-title">Пoдробhее</div>

          <div className="img-label">Совместимость</div>
          <div className="img-info">Подходит для вегетарианцев, для веганов</div>

          <div className="img-label">ДиапАзон цен</div>
          <div className="img-info">300 ₽ – 1 500 ₽</div>

          <div className="img-label">Тип кухни</div>
          <div className="img-info">Ближневосточная</div>

          <div className="img-title">
            Адреc и kонтaкты
          </div>
        </div>
        <div className="main-map-container" style={{ padding: '20px', marginBottom: '400px', maxHeight: '400px' }}>
          <MapContainer />
        </div>
        <div className="author-spacing">
          <div className="map-details-container">
            <img src={mapIcon} />
            <div className="map-detail">Москва, Садовническая набережная 7 (ЦАО)</div>
          </div>
          <div className="map-details-container">
            <img src={contactIcon} />
            <div className="map-detail">+7 495 740-56-47</div>
          </div>
          <div className="map-details-container">
            <img src={instaIcon} />
            <div className="map-detail">@blau.msc</div>
          </div>
          <div className="map-details-container">
            <img src={fbIcon} />
            <div className="map-detail">BLAU</div>
          </div>
        </div>
      </div>
      <OFooter/>

    </>
  )
}

export default Author
