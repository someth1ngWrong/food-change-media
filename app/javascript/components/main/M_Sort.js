import React from "react"
import A_TextTile from './A_TextTile'
import M_Sort_Text from './M_Sort_Text'
class M_Sort extends React.Component {
  render () {
    return (
    <div>
    	<A_TextTile title="Рецепtы"/>
    	<div>
    		<M_Sort_Text text="Сортировать:"/>
    		<M_Sort_Text text="По времени приготовления"/>    		
    	</div>
        
    </div>
    );
  }
}

export default M_Sort