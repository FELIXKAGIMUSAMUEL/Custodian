import React from 'react'
import './Cards.css'
import { CardsData } from '../../Data/Data'

const Cards = () => {

    const handleCardClick = (title) => {
        alert(`Clicked on card with title: ${title}`);
        // You can perform any actions you want when a card is clicked
      }

  return (
    <div className="Cards">
        {CardsData.map((Card, id)=>{
            const cardStyle = {
                background: Card.color,
                boxShadow: Card.boxShadow
            };

            return(
                <div key={id} className="parentContainer" style={cardStyle} onClick={() => handleCardClick(Card.title)}>
                    <h1><b>{Card.number}</b></h1>
                    {Card.title}
                </div>
            )
        })}
    </div>
  )
}

export default Cards
