import React, {useState, useEffect}  from 'react'
import CardsServices from '../components/Home/CardsServices'
import PresentationVideo from '../components/Home/PresentationVideo'
import Slide from '../components/Slide'
import CardsAvantagesIntegraphone from '../components/Home/CardsAvantagesIntegraphone'
import IlNousOntFaitConfianceHome from '../components/Home/IlNousOntFaitConfianceHome'
import data_avantages from '../data/avantages_integraphones'
import ModalCookies from '../components/Modal/ModalCookies'
import Cookies from 'universal-cookie'
export default function Home() {
    const [showModal, setShowModal] = useState(true) 

    useEffect(() => {
        const cookie = new Cookies()

        if(cookie.get('integraphone') === "cookie_allowed")
        {
            setShowModal(false)
        } 
        if(cookie.get('integraphone') === "cookie_refused"){
            setShowModal(false)
        } 
    }, [showModal])
    
    return (
        <>
        <div className="home">
            <Slide/>
            <CardsServices/>
            <CardsAvantagesIntegraphone dataCards={data_avantages}/>
            <IlNousOntFaitConfianceHome/>
            <PresentationVideo/>
           {showModal && <ModalCookies setShowModal={setShowModal}/>} 
        </div>
        </>
    )
}
