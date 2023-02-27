import React, {useState, useRef} from 'react'
import InfogeranceMenu from '../../components/ComponentMenu'
import serveur from '../../images/infogerance/serveur2.png'
import Avantages from '../../components/Avantages'
import { serveur_et_hebergement } from '../../data/avantages_operateur'
import { serveur_et_hebergement_partenaire } from '../../data/Video_surveillance/data'
import AffichageMenuDynamique from '../../components/AffichageMenuDynamique'
export default function ServeurEtHebergement() {
    let itemEls = useRef([])

    const [myData, setMyData] = useState({
        titre:"Lenovo",
        img:"lenovo.png",
        text:"Lenovo est une des marques du secteur que l’on ne présente plus. Fabricant de nombreux produits tels que des téléphones, ordinateurs, télévisions,... l’entreprise chinoise est également reconnue pour la qualité de ses serveurs informatiques. Sa gamme de serveurs Think System a d’ailleurs été classée première en termes de fiabilité et disponibilité parmi les plateformes Intel x86 selon l’enquête internationale 2021 de l’ITIC. De par cette reconnaissance, vous vous assurez de bénéficier d’un service de qualité, évolutif et adapté à vos besoins grâce à ses différents types de serveur : rack, tour, Edge, stratégiques, lame, haute densité,..."
    })


    const handleData = (el, index) => {
        for(let i=0; i<2;i++){
            itemEls.current[i].style.backgroundColor = ""
            itemEls.current[i].style.color = ""
        }

            itemEls.current[index].style.backgroundColor = "#037EAC"
            itemEls.current[index].style.color = "white"

        setMyData(el)
   
    }
    return (
        <>
        <InfogeranceMenu titre_menu1="Serveur et Hebergement" titre_menu2="Saas et laas" titre_menu3="Câblage réseaux" titre_menu4="Protection des données" root1="/infogerance/serveur_et_hebergement" root2="/infogerance/saas_et_laas" root3="/infogerance/cablage_reseaux" root4="/infogerance/protection_des_donnees" border_color_menu="border_color_menu_infogerance" trait_color="operateur_trait_infogerance" myBackgroundColor="#037EAC" name="infogerance"/>
        <div className="operateur_titre">
                <h1>Serveur et Hébergement</h1>
                <div style={{background:"#037EAC"}} className="trait_titre_400"></div>
        </div>
        <div className="operateur_texte_image container">
            <p><span>Quel serveur pour mon entreprise ?</span><br/><br/>La préservation des données est devenue l’un des enjeux majeurs des entreprises. Face à cette problématique, Integraphone vous propose des solutions d’hébergements s’adaptant à vos besoins et à votre budget.<br/><br/>La première est celle du serveur dédié. Comme son nom l’indique, cette solution d’hébergement vous permettra d’avoir votre serveur unique destiné aux seules ressources de votre entreprise. A contrario, le serveur mutualisé sera partagé avec d’autres entreprises mais représentera un coût moins important.<br/><br/>La dernière solution est celle du serveur virtuel. En pleine expansion depuis ces dernières années, celui-ci regroupe tous les avantages du serveur dédié et permet, en plus, une redondance des informations mais également un redimensionnant en quelques instants !</p>
            <img src={serveur} className="image_telephonie_ip" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip">
                    <a href="/formulaire_devis_infogerance">Devis infogerance</a>
        </div>
        <div className="title_avantages">Les partenaires</div>

        <div className="nos_systemes_de_conference_outside container">
        {
            serveur_et_hebergement_partenaire.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #037EAC"}} key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
        <AffichageMenuDynamique element={myData} folder_name="partenaire_logo" partenaire={true}/>


        <div className="title_avantages">Les avantages des solutions de serveur et d’hébergement </div>
        <div className="avantages_main container">
                {
                    serveur_et_hebergement.map((element, index) => {
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
