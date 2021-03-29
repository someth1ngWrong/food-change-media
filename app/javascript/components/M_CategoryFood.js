import React from "react"
import PropTypes from "prop-types"
import A_TextCaption from './A_TextCaption'
import 'stylesheets/M_CategoryFood.css'


class M_CategoryFood extends React.Component {
  render () {
    return (
      <div className='M_CategoryFood'>
        <ul>
          <A_TextCaption name="Закуски" />
          <A_TextCaption name="Завтраки" />
          <A_TextCaption name="Салаты" />
          <A_TextCaption name="Супы" />
          <A_TextCaption name="Основные блюда" />
          <A_TextCaption name="Напитки" />
          <A_TextCaption name="Десерты" />
        </ul>
      </div>
    );
  }
}

export default M_CategoryFood
