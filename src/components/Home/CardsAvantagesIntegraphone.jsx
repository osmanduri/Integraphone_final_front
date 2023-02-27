import React from 'react'
import Avantages from '../../components/Home/AvantagesIntegraphone'
import img_devenir_revendeur from '../../images/avantages_integraphone/four.png'
export default function CardsAvantagesIntegraphone({dataCards}) {
    return (
        <div className="avantages_integraphone">
            { dataCards[0].titre === 'Choix des abonnements' ? (
            <>
                <h1 className="home_big_title">Devenir partenaire Integraphone</h1>
                <div className="devenir_partenaire_texte">Vous êtes un distributeur, grossiste, resseller ou même consultant de services internet et télécom et vous souhaitez<br/>compléter votre offre d’équipements par des abonnements ? Integraphone vous accompagne pour développer votre<br/> business et augmenter votre chiffre d’affaires en commercialisant l’ensemble de ses solutions.</div>
                <div className="devenir_partenaire_titre">
                    <img src={img_devenir_revendeur} alt="image_devenir_partenaire"/>
                    <p>Etapes pour devenir revendeur :</p>
                </div>
            </>
            ) : 
            ( 
                <h1 className="home_big_title">Les avantages integraphone</h1>
            )}
                <div className="avantages_integraphone_outside">
                {
                    dataCards.map((element, index) => {
                        return(
                            <Avantages element={element} key={index} folder_name="avantages_integraphone"/>
                        )
                    })
                }
                    
                </div>
        </div>
    )
}
