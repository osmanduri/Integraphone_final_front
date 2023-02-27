import React from 'react'

export default function CardsEligiblite({element}) {
    return (
        <div className="cards_eligibilite_inside">
            
            <div className="cards">
                <p>Technologie: {element.technologie}</p>
                <p>Débit: <strong>{element.debit}</strong></p>
                <button type="submit">Devis</button>
            </div>
        </div>
    )
}
