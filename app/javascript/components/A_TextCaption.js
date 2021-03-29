import React from "react"
import PropTypes from "prop-types"


class A_TextCaption extends React.Component {
  render () {


    return (
      <div>
        <a>{this.props.name}</a>
      </div>
    );
  }
}

export default A_TextCaption
