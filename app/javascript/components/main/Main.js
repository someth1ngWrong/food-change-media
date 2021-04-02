import React from "react"
import PropTypes from "prop-types"
import HomeCard1 from 'images/home_2.svg'
import HomeCard2 from 'images/home_3.svg'
import A_TextTitle from './A_TextTitle'
import M_Collection from './M_Collection'
import M_Sort_Text from './M_Sort_Text'
import M_Sort_Description from './M_Sort_Description'
import O_CardRecipe from './O_CardRecipe'
import CardImage1 from 'images/recipe_1.svg'
import CardImage2 from 'images/recipe_2.svg'
import CardImage3 from 'images/recipe_3.svg'
import CardImage4 from 'images/recipe_4.svg'

class Main extends React.Component {
  render () {


    return (
      <>
        <div className="home-title">
          <A_TextTitle title="ПOДБOPКИ" />
        </div>
        <div className="card">
          <M_Collection card="card-1" cardIimage="card-image-1" image={HomeCard1} cardDescription="card-description-1" text="Для веселых вечеров"/>
          <M_Collection card="card-2" cardIimage="card-image-2" image={HomeCard1} cardDescription="card-description-2" text="Азиатская кухня" />
        </div>

        <div className="title-2">
          <A_TextTitle title="Рецепtы" />
        </div>
        <div>  
          <M_Sort_Text text="Сортировать"/>
          <M_Sort_Description text1="По времени приготовления" text2="По рейтингу"/>
        </div>
        <O_CardRecipe CardImage1={CardImage1} title="Капрезе" text="Легко готовить" time="10–15 мин"/>
        <O_CardRecipe CardImage1={CardImage2} title="Лосось с салатом из рукколы, феты и груши..." text="Нужно постараться" time="100 мин"/>
        <O_CardRecipe CardImage1={CardImage3} title="Кебаб в пите" text="Нужно постараться" time="50 мин"/>
        <O_CardRecipe CardImage1={CardImage4} title="Овсянка с фруктами" text="Легко готовить" time="10–15 мин"/>
      </>
    );
  }
}

export default Main;
