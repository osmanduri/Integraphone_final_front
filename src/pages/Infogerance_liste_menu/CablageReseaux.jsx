import React from 'react'
import InfogeranceMenu from '../../components/ComponentMenu'
import cable from '../../images/infogerance/cable.jpg'
import Avantages from '../../components/Avantages'
import { cablage_reseaux } from '../../data/avantages_operateur'
export default function CablageReseaux() {
    return (
        <>
        <InfogeranceMenu titre_menu1="Serveur et Hebergement" titre_menu2="Saas et laas" titre_menu3="Câblage réseaux" titre_menu4="Protection des données" root1="/infogerance/serveur_et_hebergement" root2="/infogerance/saas_et_laas" root3="/infogerance/cablage_reseaux" root4="/infogerance/protection_des_donnees" border_color_menu="border_color_menu_infogerance" trait_color="operateur_trait_infogerance" myBackgroundColor="#037EAC" name="infogerance"/>
        <div className="operateur_titre">
                <h1>Câblage réseaux</h1>
                <div style={{background:"#037EAC"}} className="trait_titre_300"></div>
        </div>
        <div className="operateur_texte_image container">
            <p><span>Une connexion stable et pérenne !</span><br/><br/>À l’heure où l’ensemble des solutions tendent à se digitaliser, le câblage réseau reste un fondement stable et durable pour toutes entreprises. 
Fort de ses expériences et de ses compétences, Integraphone vous accompagne ainsi dans l’installation ou l’évolution de l’architecture réseau de votre entreprise.
De l’audit complet à la maintenance en passant par le câblage, la pose des composants et des équipements, nous vous proposons une offre complète et modulable sur le long terme. Adaptée à vos conditions et vos contraintes, Integraphone vous garantit ainsi une connexion rapide et sécurisée sur laquelle vous pourrez baser l’ensemble de vos outils de communication.
</p>
            <img src={cable} className="image_telephonie_ip" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip">
                    <a href="/formulaire_devis_infogerance">Devis infogerance</a>
        </div>
        <div className="title_avantages">Les avantages du câblage réseau </div>
        <div className="avantages_main container">
                {
                    cablage_reseaux.map((element, index) => {
                        return(
                            <Avantages element={element} key={index}/>
                        )                   
                    })
                }
        </div>
        <div className="operateur_margin_top"/>
        </>
    )
}
