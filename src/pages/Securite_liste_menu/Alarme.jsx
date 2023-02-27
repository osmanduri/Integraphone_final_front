import React, {useState, useRef} from 'react'
import alarme_pic from '../../images/securite/alarme.png'
import SecuriteMenu from '../../components/ComponentMenu'
import {nos_alarmes} from '../../data/Video_surveillance/data'
import AffichageMenuDynamique from '../../components/AffichageMenuDynamique'
import {alarme} from "../../data/avantages_operateur"
import { alarme_partenaire } from '../../data/Video_surveillance/data'
import Avantages from '../../components/Avantages'
export default function Alarme() {
    let itemEls = useRef([])
    let itemElsPartenaire = useRef([])


    const [myData, setMyData] = useState({
        titre:"Alarme sans fil",
        img:"alarme_sansfil.png",
        text:"Connecté directement à votre réseau, le système d’alarme sans fil confère de nombreux avantages propres à son fonctionnement. En plus d’être, comme tout système d’alarme, un élément de sécurité efficace, son déploiement non filaire vous permettra une installation rapide et simplifiée. Pouvant être placé et déplacé à l’endroit souhaité, l’alarme sans fil vous fera également profiter d’une évolutivité facile de votre installation en fonction de vos besoins."
    })

    const [myDataPartenaire, setMyDataPartenaire] = useState(    {
        titre:"Ajax",
        img:"ajax.png",
        text:"Lancé en 2011, Ajax Systems, qui se définit comme une “société de technologie”, a su devenir un acteur majeur des systèmes de sécurité en entreprise.Basés sur de nombreuses innovations, ses produits feront passer votre dispositif d’alarme en mode 2.0 ! Systèmes modulables, contrôle du hub jusqu’à 2000 mètres de distance, gestion complète via application mobile et/ou desktop... Ces fonctionnalités vous offriront une installation inédite et personnalisée. Choisir Ajax c’est bénéficier d’appareils sur batterie avec une autonomie de 7 ans et d’une fiabilité face à des menaces externes (piratage, brouillage, interception) de plus en plus fréquentes !"
    })

    const handleData = (el, index) => {
        for(let i=0; i<4;i++){
            itemEls.current[i].style.backgroundColor = ""
            itemEls.current[i].style.color = ""
        }

            itemEls.current[index].style.backgroundColor = "#85A1B1"
            itemEls.current[index].style.color = "white"

        setMyData(el)
   
    }

    const handleData_partenaire = (el, index) => {
        for(let i=0; i<2;i++){
            itemElsPartenaire.current[i].style.backgroundColor = ""
            itemElsPartenaire.current[i].style.color = ""
        }

            itemElsPartenaire.current[index].style.backgroundColor = "#85A1B1"
            itemElsPartenaire.current[index].style.color = "white"

            setMyDataPartenaire(el)
    }
    return (
        <>
        <SecuriteMenu titre_menu1="Vidéo-surveillance" titre_menu2="Alarme" titre_menu3="Contrôle d'accès" root1="/securite/video_surveillance" root2="/securite/alarme" root3="/securite/controle_acces" trait_color="operateur_trait_securite" border_color_menu="border_color_menu_securite" myBackgroundColor="#85A1B1" name="securite"/>
        <div className="operateur_titre">
                <h1>Alarme</h1>
                <div style={{background:"#85A1B1"}} className="trait_titre_100"></div>
        </div>
        <div className="operateur_texte_image container">
        <p><span>Prévenir et dissuader pour plus de sécurité !</span><br/><br/>Incendies, intrusions, agressions, hold-up, ... les risques d’incidents pour les entreprises peuvent être multiples. Pour assurer la protection de votre entreprise et de vos biens, Integraphone vous propose donc des systèmes d’alarme d’une grande puissance et de haute qualité.<br/><br/>Leur son puissant et les nombreuses technologies de pointe sur lesquelles elles s’appuient (touche SOS, bouton panique, ...) sauront prévenir vos collaborateurs de tout danger, quel que soit sa nature. <br/><br/>Parce que vos locaux doivent être protégés à tout moment, vous aurez la possibilité de contrôler votre alarme à distance, depuis votre smartphone et de le coupler à tout autre système de sécurité vous assurant ainsi une surveillance maximale.</p>
            <img src={alarme_pic} className="image_alarme" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip container">
                    <a href="/formulaire_devis_securite">Devis securite</a>
        </div>
        
        <div className="title_avantages">Nos différents types d'alarmes</div>
        <div className="nos_systemes_de_conference_outside container">
        {
            nos_alarmes.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
        <AffichageMenuDynamique element={myData} folder_name="alarme" partenaire={false}/>

        <div className="title_avantages">Nos partenaires en systèmes d'alarme</div>

        <div className="nos_systemes_de_conference_outside container">
        {
            alarme_partenaire.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData_partenaire(el, index)} ref={(element) => itemElsPartenaire.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }

        <AffichageMenuDynamique element={myDataPartenaire} folder_name="partenaire_logo" partenaire={true}/>
        </div>
        <div className="title_avantages">Les avantages des systèmes d’alarme</div>
        <div className="avantages_main container">
                {
                    alarme.map((element, index) => {
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
