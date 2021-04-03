import React from "react"
import PropTypes from "prop-types"
import A_TextBodyCards from './A_TextBodyCards'
import A_PhotoCards from './A_PhotoCards'


class M_Collection extends React.Component {
  render () {
    return (
      <div>
        <div>
          <A_PhotoCards/>
          <A_TextBodyCards name="Азиатская кухня" />
        </div>
      </div>
    );
  }
}

export default M_Collection
