import React from "react"
import O_CardImage from './O_CardImage'
import O_IconCardTag from './O_IconCardTag'
import A_TextTitle from './A_TextTitle'
import O_ClockIcon from './O_ClockIcon'
import O_TimeIcon from './O_TimeIcon'
class O_CardRecipe extends React.Component {
  render () {
    return (
    <>
		<div className="recipe-card">
			<div className="recipe-card-section-1">
				<O_CardImage src={this.props.CardImage1}/>
				<O_IconCardTag />
			</div>
			<div className="recipe-card-section-2">
				<A_TextTitle title={this.props.title}/>
				<span className="recipe-time"><O_TimeIcon />{this.props.time} - <O_ClockIcon/>{this.props.text}</span> 
			</div>

		</div>        
    </>
    );
  }
}

export default O_CardRecipe