import React from 'react'
import InfogeranceMenu from '../../components/ComponentMenu'
import saas from '../../images/infogerance/saas.png'
import Avantages from '../../components/Avantages'
import { saas_et_laas } from '../../data/avantages_operateur'
export default function SaasLaas() {
    return (
        <>
        <InfogeranceMenu titre_menu1="Serveur et Hebergement" titre_menu2="Saas et laas" titre_menu3="Câblage réseaux" titre_menu4="Protection des données" root1="/infogerance/serveur_et_hebergement" root2="/infogerance/saas_et_laas" root3="/infogerance/cablage_reseaux" root4="/infogerance/protection_des_donnees" border_color_menu="border_color_menu_infogerance" trait_color="operateur_trait_infogerance" myBackgroundColor="#037EAC" name="infogerance"/>
        <div className="operateur_titre">
                <h1>Saas et IaaS</h1>
                <div style={{background:"#037EAC"}} className="trait_titre_200"></div>
        </div>
        <div className="operateur_texte_image container">
            <p><span>Externalisez votre infrastructure informatique !</span><br/><br/>Aujourd’hui, de plus en plus d’entreprises quittent le modèle traditionnel des serveurs autohébergés pour passer à des solutions de Cloud Computing, notamment via les modèles SaaS et IaaS. 
•	En optant pour la solution IaaS (Infrastructure as a Service), Integraphone hébergera une partie de votre infrastructure informatique : serveurs, réseau et stockage de données. 
•	La solution SaaS vous permettra, quant à elle, un hébergement de vos données mais également de vos applications et logiciels. Integraphone vous offrira ainsi une accessibilité totale, n’importe où, n’importe quand et sur n’importe quel support pourvu d’une connexion internet.
Que vous fassiez le choix de l’IaaS ou du SaaS, Integraphone vous proposera des offres sur-mesure et basées sur des serveurs hautement sécurisés.
</p>
            <img src={saas} className="image_telephonie_ip" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip">
                    <a href="/formulaire_devis_infogerance">Devis infogerance</a>
        </div>
        <div className="title_avantages">Les avantages du Saas et IaaS</div>
        <div className="avantages_main container">
                {
                    saas_et_laas.map((element, index) => {
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
