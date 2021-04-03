import React from "react"
import PropTypes from "prop-types"


class A_TextCaption extends React.Component {
  render () {

    return (
        <a className="author-short-desc">{this.props.name}</a>
    );
  }
}

export default A_TextCaption
