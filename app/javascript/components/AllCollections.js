import React from 'react'
import ImagePasta from 'images/pasta.png'
import ImageDishTwo from 'images/dish_2.png'
import ImageEgg from 'images/image_egg.png'
import ImageDishFour from 'images/dish_4.png'
import ImageDishFive from 'images/dish_5.png'
import ImageDishSix from 'images/dish_6.png'
import OFooter from '../components/OFooter'



const AllCollections = () => {

  const data = [
    { image: ImagePasta, name: "Для веселых вечеров", backgroundColor: "#AD99E5" },
    { image: ImageDishTwo, name: "Азиатская кухня", backgroundColor: "#F0C00E" },
    { image: ImageEgg , name: "Завтраки", backgroundColor: "#FF6242" },
    { image: ImageDishFour, name: "Как в Берлине!", backgroundColor: "#4AB15E" },
    { image: ImageDishFive, name: "Ужин при свечах", backgroundColor: "#272727" },
    { image: ImageDishSix, name: "Десерты", backgroundColor: "#AD99E5" },
    { image: ImagePasta, name: "Паста", backgroundColor: "#F0C00E" },
    { image: ImageDishTwo, name: "Быстрые десерты", backgroundColor: "#FF6242" },
    { image: ImageDishFour, name: "Вегетариан- цам", backgroundColor: "#AD99E5" },
    { image: ImageEgg, name: "Яичный спас", backgroundColor: "#272727" },
   ];

  return (
    <>
      <div className="cards-container">
        <div className="recipe-title">
          <h1>пOдбopКи</h1>
        </div>
        <div className="card-row-block">
          {
            data.map((card) => {
              return(
                <div className="card-block" style={{ background: card.backgroundColor}}>
                  <div className="card-image-block">
                    <img src={card.image} className="card-image"/>
                  </div>
                  <div className="card-name">{card.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <OFooter/>
    </>
  )
}

export default AllCollections
