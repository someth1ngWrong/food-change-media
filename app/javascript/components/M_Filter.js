import React from "react"
import PropTypes from "prop-types"
import A_IconOmnivore from './A_IconOmnivore'
import A_IconPescetarian from './A_IconPescetarian'
import A_IconVegan from './A_IconVegan'
import A_IconVegetarian from './A_IconVegetarian'


class M_Filter extends React.Component {
  render (src) {
    return (
      <div>
        <p>Я ЕМ</p>
        <A_IconOmnivore />
        <A_IconPescetarian />
        <A_IconVegan />
        <A_IconVegetarian />
      </div>
    );
  }
}

export default M_Filter
