import React from 'react'
import InfogeranceMenu from '../../components/ComponentMenu'
import protection_donnees from '../../images/infogerance/protection_donnees.png'
import Avantages from '../../components/Avantages'
import { protection_des_donnees } from '../../data/avantages_operateur'
export default function ProtectionDesDonnees() {
    return (
        <>
        <InfogeranceMenu titre_menu1="Serveur et Hebergement" titre_menu2="Saas et laas" titre_menu3="Câblage réseaux" titre_menu4="Protection des données" root1="/infogerance/serveur_et_hebergement" root2="/infogerance/saas_et_laas" root3="/infogerance/cablage_reseaux" root4="/infogerance/protection_des_donnees" border_color_menu="border_color_menu_infogerance" trait_color="operateur_trait_infogerance" myBackgroundColor="#037EAC" name="infogerance"/>
        <div className="operateur_titre">
                <h1>Protection des données</h1>
                <div style={{background:"#037EAC"}} className="trait_titre_400"></div>
        </div>
        <div className="operateur_texte_image container">
            <p><span>Sécurisez vos données, renforcez votre productivité !</span><br/><br/>Avec un nombre de cyberattaques en forte augmentation ces dernières années, sécuriser son réseau professionnel est devenu une nécessité pour toute entreprise.
Pour cela, Integraphone vous propose des solutions garantissant une sécurité optimale de vos infrastructures réseau, tant en flux entrant que sortant : systèmes de sauvegarde, VPN, serveurs proxy, baies de stockages (avec déduplication), outils anti DDOS, firewall avec couche UTM.
Parce que le sujet peut être complexe et le choix difficile, Integraphone vous fera toujours bénéficier du système de protection le plus adapté à la taille de votre entreprise, à votre infrastructure et à vos besoins et assurera, en plus de cela, l’entretien régulier de ce dernier.
</p>
            <img src={protection_donnees} className="image_telephonie_ip" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip">
                    <a href="/formulaire_devis_infogerance">Devis infogerance</a>
        </div>
        <div className="title_avantages">Les avantages de la protection des données </div>
        <div className="avantages_main container">
                {
                    protection_des_donnees.map((element, index) => {
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
