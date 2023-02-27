import React from 'react'
import OperateurMenu from '../../components/ComponentMenu'
import TestEligibilite from '../../components/TestEligibilite'
import fibre_optique from '../../images/operateur/fibre_optique.png'
import Avantages from '../../components/Avantages'
import data_avantages_operateur from '../../data/avantages_operateur'
export default function FibreOptique() {
    return (
        <div className="operateur_fibre_optique">
            <OperateurMenu root1="/operateur/fibre_optique" root2="/operateur/telephonie_ip" root3="/operateur/telephonie_mobile" titre_menu1="Fibre Optique" titre_menu2="Téléphonie IP" titre_menu3="Téléphonie Mobile" trait_color="operateur_trait_operateur" border_color_menu="border_color_menu_operateur" myBackgroundColor="#DCC28F" name="operateur"/>
            <div className="operateur_titre">
                    <h1>Fibre Optique</h1>
                    
                    <div className="trait_titre_200"></div>
            </div>
            <div className="operateur_texte_image container">            
                <p><span>Faites passer votre entreprise à la vitesse supérieure !</span><br/><br/>Integraphone propose aux entreprises de Paris et d’Ile-de-France de bénéficier d’un accès Internet à très haut débit, leur permettant de supporter l’ensemble de leurs fonctionnalités et activités, grâce à son offre de Fibre Optique pour entreprises. <br/><br/>Rester en contact avec vos clients, sauvegarder d’importants volumes de données, télécharger des fichiers, ... la fibre optique vous permettra de bénéficier d’un réseau optimal aussi bien en réception qu’en émission. <br/><br/>Plus qu’Internet, c’est une fiabilité et une capacité de transmission illimitée auxquelles vous aurez accès, le tout à des prix adaptés à vos besoins techniques et économiques !</p>
                {window.innerWidth < 1024 && <TestEligibilite/>}
                <img src={fibre_optique} className="image_fibre_optique" alt="image_operateur"/>       
            </div>  
            {window.innerWidth > 1024 && <TestEligibilite/>}
            <div className="title_avantages">Les avantages de la Fibre Optique</div>
            <div className="avantages_main container">
                {
                    data_avantages_operateur.map((element, index) => {
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
