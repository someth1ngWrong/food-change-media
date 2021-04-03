import React from "react"
import PropTypes from "prop-types"
import A_TextCaption from './A_TextCaption'
import 'stylesheets/M_CategoryFood.css'


class M_CategoryFood extends React.Component {
  render () {
    return (
      <div className='M_CategoryFood'>
        <div className="nav-options-block">
          <div className="nav-option">
            <A_TextCaption name="Закуски" />
          </div>
          <div className="nav-option">
            <A_TextCaption name="Завтраки"/>
          </div>
          <div className="nav-option">
            <A_TextCaption name="Салаты"/>
          </div>
          <div className="nav-option">
            <A_TextCaption name="Супы"/>
          </div>
          <div className="nav-option">
            <A_TextCaption name="Основные блюда"/>
          </div>
        </div>
      </div>
    );
  }
}

export default M_CategoryFood
