import React from "react"
import PropTypes from "prop-types"
import A_Logo from './A_Logo'
import M_HeaderIcons from './M_HeaderIcons'
import M_CategoryFood from './M_CategoryFood'
import M_Filter from './M_Filter'



class O_HeaderMobile extends React.Component {
  render () {
    return (
      <div>
        <div className="navbar-container">
          <div className="navbar-block">
            <div className="logo-container">
              <A_Logo />
            </div>
            <div className="action-container">
              <M_HeaderIcons />
            </div>
          </div>
        </div>
        <M_CategoryFood />
        <M_Filter />
      </div>
    );
  }
}

export default O_HeaderMobile

// ReactDOM.render(
//     <O_HeaderMobile />,
//   document.getElementById('root')
// );
