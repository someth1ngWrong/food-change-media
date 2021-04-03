import React from "react"
import PropTypes from "prop-types"
import CardsPhotoOne from 'images/CardsPhotoOne.png'

class A_PhotoCards extends React.Component {
  render (src) {


    return (
      <div>
        <img src={CardsPhotoOne}/>
      </div>
    );
  }
}

export default A_PhotoCards
