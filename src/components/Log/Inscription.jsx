import React from 'react'
import inscription from '../../images/log/inscription.png'
import CardsAvantagesIntegraphone from '../Home/CardsAvantagesIntegraphone'
import RetourRafraichir from '../RetourRafraichir'
import devenirPartenaireData from '../../data/devenir_partenaire'


export default function Inscription() {
    return (
        <>
        <CardsAvantagesIntegraphone dataCards={devenirPartenaireData}/>
        <div className="inscription">
            <div className="inscription_inside">
                <a href="/formulaire_partenaire">Nous rejoindre</a>
            </div>
            
        </div>
        </>
    )
}
