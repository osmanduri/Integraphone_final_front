import React from 'react'
import Cards from '../../components/CardsHome'
import data_cards from '../../data/cards'
export default function CardsServices() {

    return (
        <div className="services_titre">
            <h1 className="home_big_title">Nos services</h1>
                <div className="cards_container container">
                    {
                        data_cards.map((element, index) => {
                            return (
                                <Cards element={element} key={index}/>
                            )
                        })
                    }
                </div>     
        </div>
    )
}
