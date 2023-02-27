import React from 'react'

export default function CardsHome({element}) {
    return (
        <div className="cards_home" style={{border:`5px solid ${element.border_color}`}}>
            <h3>{element.titre}</h3>
            <p>{element.description}</p>
            <div className="cards_home_image">
                <img src={require(`../images/cards/${element.img}.${element.format}`)} alt="supervision"/>
            </div>
            
        </div>
    )
}
