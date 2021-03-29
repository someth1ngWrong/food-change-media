import React from "react"
import PropTypes from "prop-types"
import Logo from 'images/logo.svg'


class A_Logo extends React.Component {
  render (src) {
    return (
      <div>
        <img src={Logo} />
      </div>
    );
  }
}

export default A_Logo
