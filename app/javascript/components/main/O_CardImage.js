import React from "react"

class O_CardImage extends React.Component {
  render (src) {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    );
  }
}

export default O_CardImage
