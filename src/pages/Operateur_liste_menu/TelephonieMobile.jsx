import React from 'react'
import OperateurMenu from '../../components/ComponentMenu'
import TestEligibilite from '../../components/TestEligibilite'
import telephonie_mobile_pic from '../../images/operateur/telephonie_mobile.png'
import { telephonie_mobile } from '../../data/avantages_operateur'
import Avantages from '../../components/Avantages'
export default function TelephonieMobile() {

    return (
        <>
            <OperateurMenu root1="/operateur/fibre_optique" root2="/operateur/telephonie_ip" root3="/operateur/telephonie_mobile" titre_menu1="Fibre Optique" titre_menu2="Téléphonie IP" titre_menu3="Téléphonie Mobile" border_color_menu="border_color_menu_operateur" trait_color="operateur_trait_operateur" myBackgroundColor="#DCC28F" name="operateur"/>
            <div className="operateur_titre">
                    <h1>Téléphonie Mobile</h1>
                    <div className="trait_titre_300"></div>
            </div>
            <div className="operateur_texte_image container">
                <p><span>3 réseaux téléphoniques sur un seul mobile, c’est possible ?</span><br/><br/>Vous êtes souvent en déplacement ? Il est primordial, pour votre activité, que vous soyez joignable à tout moment ? En s’appuyant sur des forfaits basés sur l’interchangeabilité des 3 opérateurs historiques français, Integraphone vous garantit une couverture nationale optimale.<br/><br/>Avec ou sans engagement, création ou portabilité, 5 ou 100 Go, fair use... Integraphone fait bénéficier à votre entreprise et à vos collaborateurs de forfaits adaptés à votre consommation, vos besoins et à votre budget !</p>
                {window.innerWidth < 1024 && <TestEligibilite/>}
                <img src={telephonie_mobile_pic} className="image_telephonie_mobile" alt="image_operateur"/>
            </div>
            {window.innerWidth > 1024 && <TestEligibilite/>}
            <div className="title_avantages">Les avantages de nos forfaits mobiles professionnels</div>
            <div className="avantages_main container">
                {
                    telephonie_mobile.map((element, index) => {
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
