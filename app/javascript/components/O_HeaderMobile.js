import React from "react"
import PropTypes from "prop-types"
import A_Logo from './A_Logo'
import M_HeaderIcons from './M_HeaderIcons'
import M_CategoryFood from './M_CategoryFood'
import M_Filter from './M_Filter'
import M_Collection from './M_Collection'




class O_HeaderMobile extends React.Component {
  render () {
    return (
      <div>
        <A_Logo />
        <M_HeaderIcons />
        <M_CategoryFood />
        <M_Filter />
        --------------
        <M_Collection />
        <M_Collection />

      </div>
    );
  }
}

export default O_HeaderMobile

// ReactDOM.render(
//     <O_HeaderMobile />,
//   document.getElementById('root')
// );
