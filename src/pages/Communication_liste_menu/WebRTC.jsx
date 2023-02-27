import React from 'react'
import CommunicationMenu from '../../components/ComponentMenu'
import web_rtc_pic from '../../images/communication/web_rtc.png'
import Avantages from '../../components/Avantages'
import { web_rtc } from '../../data/avantages_operateur'

export default function WebRTC() {
    return (
        <div className="operateur_fibre_optique">
            <CommunicationMenu root1="/communication/systemes_de_conference" root2="/communication/web_rtc" root3="/communication/affichage_dynamique" titre_menu1="Systèmes de conference" titre_menu2="Web RTC" titre_menu3="Affichage dynamique" trait_color="operateur_trait_communication" border_color_menu="border_color_menu_communication" myBackgroundColor="#BB8D33" name="communication"/>
            <div className="operateur_titre">
                    <h1>Web RTC</h1>
                    <div style={{background:"#BB8D33"}} className="trait_titre_100"></div>
            </div>
            <div className="operateur_texte_image container">
            <p><span>Une disponibilité n’importe où, n’importe quand !</span><br/><br/>Imaginez une solution réunissant tous les outils de visioconférence le tout, sans logiciel ! Basé uniquement sur les différents navigateurs internet, le Web RTC (Web Real Time Communication) est un standard vous offrant l’ensemble de ces caractéristiques.<br/><br/>Implémenter sur votre site internet, cette solution vous permettra de vous voir, vous parler, d’échanger des documents, de partager votre écran et tout cela, depuis votre ordinateur, votre tablette, votre smartphone et même depuis votre téléphonie fixe ! <br/><br/>De leur côté, vos interlocuteurs n’auront besoin ni d’équipements ou d’applications supplémentaires pour entrer en contact avec vous !</p>
                <img src={web_rtc_pic} className="image_fibre_optique" alt="image_operateur"/>
            </div>
            <div className="operateur_telephonie_ip container">
                        <a href="/formulaire_devis_communication">Devis communication</a>
            </div>
            <div className="title_avantages">Les avantages du Web RTC </div>
            <div className="avantages_main container">
                {
                    web_rtc.map((element, index) => {
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
