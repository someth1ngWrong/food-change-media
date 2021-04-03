import React from 'react'
import authorLogo from 'images/A_LogoAuthor.svg'
import authorImage from 'images/author_image.png'
import A_TextCaption from './A_TextCaption'
import M_SliderAuthor from './M_SliderAuthor'
import M_AuthorName from './M_AuthorName'
import M_Breadcrumbs from './M_Breadcrumbs'

const O_DescriptionAuthorInformation = () => {
  return (
    <div>
      <div className="author-spacing">
        <div style={{ marginBottom: "1rem"}}>
          <M_Breadcrumbs />
        </div>
        <M_AuthorName authorLogo={authorLogo} text="BLAU" />
        <A_TextCaption name="Рецепты автора" />
        <div className="author-long-desc">
          <A_TextCaption name="Небольшой ресторан с ближневосточной кухней открылся на Садовнической набережной 24 июля и моментально попал в инстаграмы всех любителей новых мест в городе — барная стойка глубокого синего цвета на фоне охровых стен будто бы специально была создана для кадров в социальных сетях." />
        </div>
      </div>
      <M_SliderAuthor imgSrc={authorImage} />
    </div>
  )
}

export default O_DescriptionAuthorInformation
