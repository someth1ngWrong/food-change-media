import React from "react"
import A_TextTitle from './A_TextTitle'
import Photo from './Photo'
class M_Collection extends React.Component {
  render () {
    return (
   		<>
          <div className={this.props.card}>
         	   	<Photo src={this.props.image} style={this.props.cardIimage}/>
            	<div className={this.props.cardDescription}>
            		<A_TextTitle title={this.props.text}/>
            	</div>
          	</div>
        </>
    );
  }
}

export default M_Collection