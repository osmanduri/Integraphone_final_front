import React from 'react'
import CommunicationMenu from '../../components/ComponentMenu'
import TestEligibilite from '../../components/TestEligibilite'
import dynamique from '../../images/communication/affichage_dynamique.gif'
import Avantages from '../../components/Avantages'
import { affichage_dynamique } from '../../data/avantages_operateur'

export default function AffichageDynamique() {
    return (
        <div className="operateur_fibre_optique">
            <CommunicationMenu root1="/communication/systemes_de_conference" root2="/communication/web_rtc" root3="/communication/affichage_dynamique" titre_menu1="Systèmes de conference" titre_menu2="Web RTC" titre_menu3="Affichage dynamique" trait_color="operateur_trait_communication" border_color_menu="border_color_menu_communication" myBackgroundColor="#BB8D33" name="communication"/>
            <div className="operateur_titre">
                    <h1>Affichage dynamique</h1>
                    <div style={{background:"#BB8D33"}} className="trait_titre_300"></div>
            </div>
            <div className="operateur_texte_image container">
            <p><span>Prévenir et dissuader pour plus de sécurité !</span><br/><br/>Avec un taux d’attraction et de mémorisation nettement supérieurs à l’affichage statique, l’affichage dynamique a connu un fort développement ces dernières années et se positionne aujourd’hui comme un support de communication professionnel efficace aussi bien en interne qu’en externe.<br/><br/>Dans ce contexte, Integraphone vous propose une large gamme de solutions d’affichage dynamique : murs d’écrans, totem, arrêt de bus, panneaux publicitaire, bornes interactives et bien d’autres encore vous permettant une diffusion de vos contenus multimédias optimales.<br/><br/>Plus qu’une installation, c’est un accompagnement que nous vous offrons puisque nous configurons l’ensemble de votre matériel en plus de vous former à l’utilisation de celui-ci.</p>
                <img src={dynamique} className="image_fibre_optique" alt="image_operateur"/>
            </div>
            <div className="operateur_telephonie_ip container">
                        <a href="/formulaire_devis_communication">Devis communication</a>
            </div>
            <div className="title_avantages">Les avantages de l’affichage dynamique </div>
            <div className="avantages_main container">
                {
                    affichage_dynamique.map((element, index) => {
                        return(
                            <Avantages element={element} key={index}/>
                        )                   
                    })
                }
            </div>
        <div className="operateur_margin_top"/>
        </div>
    )
}
