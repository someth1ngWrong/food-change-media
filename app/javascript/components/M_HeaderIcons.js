import React from "react"
import PropTypes from "prop-types"
import A_IconSettings from './A_IconSettings'
import A_IconBookmark from './A_IconBookmark'
import A_IconSearch from './A_IconSearch'


class M_HeaderIcons extends React.Component {
  render (src) {
    return (
      <div>
        <A_IconSettings />
        <A_IconBookmark />
        <A_IconSearch />
      </div>
    );
  }
}

export default M_HeaderIcons
