import React, {useState}  from 'react'
import img_cookie from '../../images/cookies/JR_cookie.png'
import {Link}  from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function ModalCookies({setShowModal}) {
    const [showEnSaVoirPlus, setShowEnSavoirPlus] = useState(false) 

    const cookies = new Cookies();
    const accepter = () => {
        cookies.set('integraphone', 'cookie_allowed', { path: '/'})
        setShowModal(false)

        
    } 
    const refuser = () => {
        cookies.set('integraphone', 'cookie_refused', { path: '/'})
        setShowModal(false)
    } 

    const EnSavoirPlus = () => {
      setShowEnSavoirPlus(!showEnSaVoirPlus)
    } 
  return (
    <div className="modal_delete_user">
    <div className="modal_delete_user_inside">
    <h3>Gestion des Cookies</h3>
    <div className='text_cookie'>Avec votre accord, nos partenaires et nous utilisons des cookies ou technologies similaires pour stocker et accéder à des informations personnelles comme votre visite sur ce site. Vous pouvez retirer votre consentement ou vous opposer aux traitements basés sur l'intérêt légitime à tout moment en cliquant sur "En savoir plus" ou dans notre politique de confidentialité sur ce site</div>
    <img src={img_cookie} alt="cookie"/>
    <div className="bouton_oui_non">
        <div className='cookie_accepter' onClick={accepter}>Accepter</div>
        <div className='cookie_refuser' onClick={refuser}>Refuser</div>
        <span className='cookie_refuser' onClick={EnSavoirPlus} >En savoir plus</span>
        
    </div>
    </div>
    <div className={showEnSaVoirPlus ? "cookie_en_savoir_plus_modal_active" : "cookie_en_savoir_plus_modal"}> 
    <h3>Gestion des cookies</h3>
    <p><span>Le site www.integraphone.fr contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations …) mis en place avec l’autorisation de le proprietaire du site . Cependant, le proprietaire du site n’a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites. L’utilisateur est informé que lors de ses visites sur le site www.integraphone.fr, un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation. Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l’adresse suivante : www.cnil.fr Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies : Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok.</span></p>
    <button onClick={EnSavoirPlus}>Fermer</button>
     
    </div>
</div>
  )
}
