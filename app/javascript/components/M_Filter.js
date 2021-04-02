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
        <div className="tab-options-block">
          <div className="tab-block">
            <div className="tab-option active">
              <A_IconOmnivore />
            </div>
            <div className="tab-option">
              <A_IconPescetarian />
            </div>
            <div className="tab-option">
              <A_IconVegan />
            </div>
            <div className="tab-option">
              <A_IconVegetarian />
            </div>
            <p className="filter-text">Я ЕМ</p>
          </div>
        </div>
      </div>
    );
  }
}

export default M_Filter
