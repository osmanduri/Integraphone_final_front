import React, {useState, useRef} from 'react'
import OperateurMenu from '../../components/ComponentMenu'
import telephoneIP from '../../images/operateur/telephone-ip2.png'
import Avantages from '../../components/Avantages'
import { telephonie_ip } from '../../data/avantages_operateur'
import AffichageMenuDynamiqueLogo from '../../components/AffichageMenuDynamiqueLogo'
import {wildix} from '../../data/Video_surveillance/data'
export default function TelephonieIP() {
    let itemEls = useRef([])


    const [myData, setMyData] = useState(    {
        titre:"Wildix",
        img:"wildix.webp",
        text:"Fondée en 2005, Wildix est une entreprise se définissant comme “la première solution de communications unifiées axée sur les ventes”. Spécialisée dans les produits utilisant la technologie Voix sur IP (VoIP), Wildix propose une large gamme de téléphones IP. Du manager souhaitant surveiller l’activité téléphonique de son entreprise au téléphone le plus simple conçu pour les employés en passant par celui compatible pour la visioconférence,... ces derniers ont tous des caractéristiques qui leurs sont propres. Ainsi, vous trouverez forcément la solution adaptée à vos besoins qu’ils soient techniques ou économiques vous offrant ainsi une optimisation de votre communication interne et externe."
    })

    const handleData = (el, index) => {
        for(let i=0; i<1;i++){
            itemEls.current[i].style.backgroundColor = ""
            itemEls.current[i].style.color = ""
        }

            itemEls.current[index].style.backgroundColor = "#dcc28f"
            itemEls.current[index].style.color = "white"

        setMyData(el)
   
    }
    return (
        <>
            <OperateurMenu root1="/operateur/fibre_optique" root2="/operateur/telephonie_ip" root3="/operateur/telephonie_mobile" titre_menu1="Fibre Optique" titre_menu2="Téléphonie IP" titre_menu3="Téléphonie Mobile" border_color_menu="border_color_menu_operateur" trait_color="operateur_trait_operateur" myBackgroundColor="#DCC28F" name="operateur"/>
            <div className="operateur_titre">
                    <h1>Telephonie IP</h1>
                    <div className="trait_titre_200"></div>
            </div>
            <div className="operateur_texte_image container">
                <p><span>La solution téléphonique pour entreprise 2.0 !</span><br/><br/>Basée sur un réseau internet ou sur un protocole TCP/IP, la téléphonie sur IP a su se développer pour devenir la nouvelle référence de communication professionnelle. 
Effectuer des appels simultanés audios ou vidéos, partager votre écran ou vos documents, indiquer votre statut de présence, ... la téléphonie IP vous permettra de bénéficier d’un grand nombre de fonctionnalités et, ainsi, d’une communication optimisée et unifiée.
De la PME à la grand entreprise, la téléphonie IP saura s’intégrer à votre société, quelle que soit sa taille, de par sa simplicité d’utilisation mais également par sa capacité d’évolutive.
</p>
                <img src={telephoneIP} className="image_telephonie_ip" alt="image_operateur"/>
            </div>
            <div className="operateur_telephonie_ip container">
                        <a href="/formulaire_devis_operateur">Devis operateur</a>
            </div>
            
            <div className="title_avantages">Notre partenaire Telephonie IP</div>
            <div className="nos_systemes_de_conference_outside container">
        {
            wildix.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #dcc28f"}} key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
        <AffichageMenuDynamiqueLogo element={myData} folder_name="partenaire_logo"/>      
        <div className="title_avantages">Les avantages de la téléphonie IP</div>
        <div className="avantages_main container">
                {
                    telephonie_ip.map((element, index) => {
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
