import React from "react"

class Photo extends React.Component {
  render () {
    return (
   		<>  
        <img src={this.props.src} className={this.props.style}/>
      </>
    );
  }
}

export default Photo