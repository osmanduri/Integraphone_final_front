import React, {useState, useRef} from 'react'
//import Avantages from '../../components/Avantages'
import CommunicationMenu from '../../components/ComponentMenu'
//import TestEligibilite from '../../components/TestEligibilite'
import systeme_conference_pic from '../../images/communication/systeme_conference.png'
import AffichageMenuDynamique from '../../components/AffichageMenuDynamique'

import { systemes_de_conference } from '../../data/Video_surveillance/data'

import Avantages from '../../components/Avantages'
import { systemes_de_conference_avantages } from '../../data/avantages_operateur'


export default function Systemes_de_conference() {
    let itemEls = useRef(new Array())


    const [myData, setMyData] = useState({
        titre:"Visualiseur",
        img:"visuel.png",
        text:"Le visualiseur est un outil de visioconférence de petite taille qui vous permettra de diffuser sur un écran intéractif ou un tableau blanc tous vos documents ou objets physiques. Pouvant être à bras mécanique, flexible ou encore USB, cette caméra vous donnera l’occasion de renforcer l’attractivité de votre présentation grâce à sa capacité d’annotation et ses images d’une qualité supérieure."
    })

    const [myDataPartenaire, setMyDataPartenaire] = useState(
        {
            titre:"Aver",
            img:"aver.png",
            text:"Récompensé par de nombreux prix liés au design, à l’innovation, aux applications et services de ses produits, Aver est un fabricant de solutions de vidéoconférences s’adaptant à tous les besoins. Point à point, multipoints ou sur USB, les produits de cette entreprise présents dans plus de 100 pays vous offriront une collaboration optimisée que vous soyez en face à face ou sur des sites différents. Enfin, grâce à l’alliance innovante de différents logiciels (outil de gestion, contrôle des caméras, prise de note,...) et technologies (4K, suivi audio, cadrage automatique,...) vous bénéficierez d’une expérience immersive rendant vos réunions semblables à un échange physique."
        })


    const handleData = (el, index) => {
        for(let i=0; i<6;i++){
            itemEls.current[i].style.backgroundColor = ""
            itemEls.current[i].style.color = ""
        }

            itemEls.current[index].style.backgroundColor = "#BB8D33"
            itemEls.current[index].style.color = "white"

        setMyData(el)
   
    }

    const handleAcer = (event) => {

        event.currentTarget.style.backgroundColor = '#BB8D33';
        event.currentTarget.style.color = '#fff';
    }
    return (
        <div className="operateur_fibre_optique">
            <CommunicationMenu root1="/communication/systemes_de_conference" root2="/communication/web_rtc" root3="/communication/affichage_dynamique" titre_menu1="Systèmes de conference" titre_menu2="Web RTC" titre_menu3="Affichage dynamique" trait_color="operateur_trait_communication" border_color_menu="border_color_menu_communication" myBackgroundColor="#BB8D33" name="communication"/>
            <div className="operateur_titre">
                    <h1>Systèmes de conférence</h1>
                    <div style={{background:"#BB8D33"}} className="trait_titre_400"></div>
            </div>
            <div className="operateur_texte_image container">
            <p><span>Des réunions comme si vous y étiez !</span><br/><br/>Organisez vos réunions, entretiens et autres rendez-vous où que vous soyez et quand vous le souhaitez grâce aux solutions de conférence Integraphone. Grâce à nos multiples solutions, nous vous proposerons des offres sur-mesure s’adaptant à vos besoins et contraintes, qu’il s’agisse d’audio, de visio ou de web conférence.<br/><br/>Plus que des logiciels, c’est une large gamme de produits hauts de gamme que nous vous garantissons. Panneau tactile, écran haute définition, caméra 4K, téléphone à haut-parleur, ... nous ferons en sorte de vous proposer une expérience immersive pour que vos réunions à distance soient tout aussi réaliste qu’en physique.</p>
                <img src={systeme_conference_pic} className="image_fibre_optique" alt="image_operateur"/>
            </div>
            <div className="operateur_telephonie_ip container">
                        <a href="/formulaire_devis_communication">Devis communication</a>
            </div>
            <div className="title_avantages">Nos systèmes de conférence</div>

        <div className="nos_systemes_de_conference_outside container">
        {
            systemes_de_conference.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
        <AffichageMenuDynamique element={myData} folder_name="systeme_conference" partenaire={false}/>

        <div className="title_avantages">Notre partenaire systeme conference</div>
        <div className="partenaire_logo_aver" onClick={handleAcer}>Aver</div>

        <AffichageMenuDynamique element={myDataPartenaire} folder_name="partenaire_logo" partenaire={true}/>
        <div className="title_avantages">Les avantages du système de conférence</div>
        <div className="avantages_main container">
                {
                    systemes_de_conference_avantages.map((element, index) => {
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
