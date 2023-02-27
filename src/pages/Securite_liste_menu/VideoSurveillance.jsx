import React, { useState, useRef } from 'react'
import SecuriteMenu from '../../components/ComponentMenu'
import video_surveillance_pic from '../../images/securite/video_surveillance.png'
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { video_surveillance } from '../../data/Video_surveillance/data'
import {video_surveillance_cards_avantage} from "../../data/avantages_operateur"
import { video_surveillance_partenaire } from '../../data/Video_surveillance/data';
import Avantages from '../../components/Avantages'

//import {video_surveillance} from "../../data/Video_surveillance/data"
import AffichageMenuDynamique from '../../components/AffichageMenuDynamique'
export default function VideoSurveillance() {

    let itemEls = useRef([])
    let itemElsPartenaire = useRef([])


    const [myData, setMyData] = useState({
        titre:"Caméra IP",
        img:"camera_ip.png",
        text:"La caméra IP (Internet Protocol) est une caméra connectée au réseau internet (via câble RJ45 ou en Wi-Fi) offrant une fiabilité et une sérénité à toute épreuve. En plus de vous fournir des images d’une qualité largement supérieure à celle d’une caméra analogique, la caméra IP vous permettra de consulter les images de votre système de vidéo-surveillance à distance et sur n’importe quel support : smartphone, ordinateur, tablette,... Dans le cas où vous ne seriez pas en train de visionner ses images, son système d’alerte vous permettra d’être prévenu en cas d’anomalie pour une sécurité assurée à tout moment."
    })

    const [myDataPartenaire, setMyDataPartenaire] = useState({
        titre:"Hikvision",
        img:"hkvision2.png",
        text:"Grâce à de nombreux investissements effectués dans la Recherche & Développement, Hikvision se positionne aujourd’hui comme l’un des premiers fournisseurs de solution IoT au monde, au niveau de la vidéosurveillance. En choisissant Hikvision, vous aurez ainsi accès à des produits innovants basés, de plus en plus, sur l’Intelligence Artificielle avec des caractéristiques telles que l’AcuSense, la reconnaissance faciale et bien d’autres encore. Enfin, la marque fondée en 2001 propose une large gamme de caméras (réseau, PTZ, Turbo HD, thermique, antidéflagrante, anticorrosion) adaptées à tous les secteurs, scénarios et tailles d’entreprises."
    })



    const handleData = (el, index) => {
        for(let i=0; i<8;i++){
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
                <h1>Vidéo-surveillance</h1>
                <div style={{background:"#85A1B1"}} className="trait_titre_300"></div>
        </div>
        <div className="operateur_texte_image container">
        <p><span>Souriez, vous êtes filmés !</span><br/><br/>Alors que les vols et cambriolages en entreprise ne cessent d’augmenter, la vidéosurveillance demeure, plus que jamais, un outil incontournable de prévention et protection des biens et des personnes. <br/><br/>Parce que chaque entreprise est unique, Integraphone propose une large gamme de solutions de vidéosurveillance vous permettant de contrôler l’intérieur ou l’extérieur de vos locaux, de jour comme de nuit tout en vous offrant une résistance aux chocs et intempéries.<br/><br/>Nous vous permettrons également de visionner vos images à tout moment, en temps réel ou en décalé et ce, que vous soyez sur un ordinateur ou un téléphone.</p>
            <img src={video_surveillance_pic} className="image_telephonie_ip" alt="image_serveur"/>
        </div>
        <div className="operateur_telephonie_ip container">
                    <a href="/formulaire_devis_securite">Devis securite</a>
        </div>
        {/*<div className="carousel_video container">
        <Swiper
                slidesPerView={4}
                spaceBetween={40}
                freeMode={true}
                pagination={false}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                navigation={false}
                scrollbar={false}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
        >
        <div className="video_surveillance_nos_cameras">
        {
            data_cameras.map((element, index) => {
                return(
                    <SwiperSlide key={index}>
                        <Camera element={element} key={index}/>
                    </SwiperSlide>
                )               
            })
        }
        </div>
        </Swiper>
        </div>*/}
        
        <div className="title_avantages">Nos types de caméras de surveillance</div>
        <div className="nos_systemes_de_conference_outside container">
        {
            video_surveillance.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData(el, index)} ref={(element) => itemEls.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
        </div>
    <AffichageMenuDynamique element={myData} folder_name="cameras" partenaire={false}/>
    <div className="title_avantages">Nos partenaires en video-surveillance</div>
    <div className="nos_systemes_de_conference_outside container">
        {
            video_surveillance_partenaire.map((el, index) => {
                return(
                    <div className="nos_systemes_de_conference_inside" style={{border: "4px solid #85A1B1"}} key={index} onClick={() => handleData_partenaire(el, index)} ref={(element) => itemElsPartenaire.current.push(element)}>
                        {el.titre}
                    </div>
                )
            })
        }
    </div>

    <AffichageMenuDynamique element={myDataPartenaire} folder_name="partenaire_logo" partenaire={true}/>

    

    

    
    
    <div className="title_avantages">Les avantages de la vidéo surveillance</div>
    <div className="avantages_main container">
                {
                    video_surveillance_cards_avantage.map((element, index) => {
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
