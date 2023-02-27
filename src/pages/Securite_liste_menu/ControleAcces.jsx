import React, {useState, useRef} from 'react'
import controle_access_pic from '../../images/securite/controle_access.png'
import SecuriteMenu from '../../components/ComponentMenu'
import Avantages from '../../components/Avantages'
import { nos_controle_acces } from '../../data/Video_surveillance/data'
import { controle_acces } from '../../data/avantages_operateur'
import { controle_acces_partenaire } from '../../data/Video_surveillance/data'
import AffichageMenuDynamique from '../../components/AffichageMenuDynamique'
export default function ControleAcces() {
    let itemEls = useRef([])
    let itemElsPartenaire = useRef([])


    const [myData, setMyData] = useState({
        titre:"Digicode",
        img:"digicode.png",
        text:"Le digicode est un appareil électronique d’ouverture basé sur la composition d’un code secret. Ainsi, seules les personnes en possession de ce dernier pourront entrer dans vos locaux ou vos bureaux vous assurant ainsi une sécurité face aux effractions et/ou cambriolages. Ce système a également un côté pratique puisqu’ils évitent l’utilisation de clé, carte ou badge pouvant être égarés à tout moment."
    })

    const [myDataPartenaire, setMyDataPartenaire] = useState(
        {
        titre:"Cdvi",
        img:"cdvi.png",
        text:"Entreprise fondée en 1985, CDVI est un fabricant de solutions de contrôle d’accès à l’origine, notamment, de produits tels que le Digicode et autres systèmes de verrouillage brevetés. Fort de ces 37 années d’expérience, la marque française propose aujourd’hui de nombreux produits répondant à tous les besoins en contrôle d’accès des entreprises : digicodes, contrôle d’accès centralisé et autonome, lecteurs, interphonie, systèmes de verrouillage et bien d’autres encore.Enfin, grâce à ses multiples pôles de R&D (France, Italie, Canada) et d’une conception, développement et maintenance effectués à 100% en France, vous aurez l’assurance de bénéficier de solutions d’une fiabilité exceptionnelle garanties 10 ans."
    })


    const handleData = (el, index) => {
        for(let i=0; i<5;i++){
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
                <h1>Contrôle d'accès</h1>
                <div style={{background:"#85A1B1"}} className="trait_titre_200"></div>
        </div>
        <div className="operateur_texte_image container">
        <p><span>Sécuriser l’accès à vos locaux !</span><br/><br/>Outil de prévention de criminalité, de protection des biens, des marchandises et des personnes, ou tout simplement de contrôle de présence, le contrôle d'accès s'impose comme un élément indispensable à tout système de sécurité en entreprise.<br/><br/>Lecteur et matériel d’accès, pointeuses, interphone, Integraphone vous propose une large gamme de solutions innovantes s’adaptant à tout usage et à tout contexte. De plus, en tant que professionnels de la sécurité, nous établissons, en premier lieu, un diagnostic personnalisé afin de vous offrir une intégration dans vos locaux répondant à l’ensemble de vos besoins.</p>
            <img src={controle_access_pic} className="image_alarme" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip container">
                    <a href="/formulaire_devis_securite">Devis securite</a>
        </div>
        


        <div className="title_avantages">Nos différents contrôle d'accès </div>
        <div className="nos_systemes_de_conference_outside container">
        {
            nos_controle_acces.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
        <AffichageMenuDynamique element={myData} folder_name="controle_acces" partenaire={false}/>

        <div className="title_avantages">Nos partenaire interphonie et contrôle d'accès</div>

        <div className="nos_systemes_de_conference_outside container">
        {
            controle_acces_partenaire.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData_partenaire(el, index)} ref={(element) => itemElsPartenaire.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }

        <AffichageMenuDynamique element={myDataPartenaire} folder_name="partenaire_logo" partenaire={true}/>
        </div>
        <div className="title_avantages">Les avantages du contrôle d’accès </div>
        <div className="avantages_main container">
                {
                    controle_acces.map((element, index) => {
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
