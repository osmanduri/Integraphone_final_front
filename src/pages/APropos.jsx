import React from 'react'
import image from '../images/a_propos/LOGO_horizontal.png'
import video_presentation from '../video/Integraphone_Telecom.mp4'
import ReactPlayer from 'react-player'
import data_a_propos from '../data/a_propos_integraphone' 
import Avantages from '../components/Home/AvantagesIntegraphone'
import PresentationVideo from '../components/Home/PresentationVideo'
import IlNousOntFaitConfianceHome from '../components/Home/IlNousOntFaitConfianceHome'
export default function APropos() {
    return (
        <>
        <div className="a_propos">
            <div className="a_propos_inside container">

            <div className='a_propos_inside_integraphone'>
                <img src={image} alt="integraphone_apropos"/> 
                <p>Fondée en 2005, Integraphone est une société basée en Ile-de-France accompagnant les entreprises, de toute taille et de tout secteur, dans leur transformation technologique au travers de 4 domaines d’expertise : opérateur, sécurité, infogérance et communication.</p>
            </div>
            
            <div className='data_a_propos'>
            {
                data_a_propos.map((element, index) => {
                    return (
                        <Avantages element={element} key={index} folder_name="a_propos"/>  
                    )
                })
            } 
            </div>

            
            
            </div>

        </div>
        <div className='home'>
            <PresentationVideo/>
            <IlNousOntFaitConfianceHome/>
            <div className="operateur_margin_top"/>
            
        </div>
        </>
    )
}
