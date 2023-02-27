import React, {useState, useEffect, useMemo} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation';
import Home from './pages/Home';
//import Contact from './pages/Contact';
import Footer from './components/Footer'
import FooterResponsive from './components/FooterResponsive';
import PhoneCall from './components/PhoneCall';
import ScrollToTop from "react-scroll-to-top";
import ArrowUp from './components/ArrowUp';
import Connexion from './components/Log/Connexion'
import Inscription from './components/Log/Inscription'
import FormulaireDevisOperateur from './pages/Formulaire/FormulaireDevis/FormulaireDevisOperateur';
import FormulaireDevisInfogerance from './pages/Formulaire/FormulaireDevis/FormulaireDevisInfogerance';
import FormulaireDevisSecurite from './pages/Formulaire/FormulaireDevis/FormulaireDevisSecurite';
import FormulaireDevisCommunication from './pages/Formulaire/FormulaireDevis/FormulaireDevisCommunication';
import Eligibilite from './pages/Eligibilite';
import FormulaireMembre from './pages/Formulaire/FormulaireMembre'
import FormulairePartenaire from './pages/Formulaire/FormulairePartenaire'
import FormulaireContact from './pages/Formulaire/FormulaireContact';
import MotDePasseOublie from './components/Log/MotDePasseOublie';
//import APropos from './pages/APropos';
import Operateur from './pages/Operateur'
import FibreOptique from './pages/Operateur_liste_menu/FibreOptique';
import TelephonieIP from './pages/Operateur_liste_menu/TelephonieIP';
import TelephonieMobile from './pages/Operateur_liste_menu/TelephonieMobile';
import Infogerance from './pages/Infogerance'
import ServeurEtHebergement from './pages/Infogerance_liste_menu/ServeurEtHebergement';
import SaasLaas from './pages/Infogerance_liste_menu/SaasLaas';
import CablageReseaux from './pages/Infogerance_liste_menu/CablageReseaux';
import ProtectionDesDonnees from './pages/Infogerance_liste_menu/ProtectionDesDonnees';
import Securite from './pages/Securite';
import VideoSurveillance from './pages/Securite_liste_menu/VideoSurveillance';
import Alarme from './pages/Securite_liste_menu/Alarme';
import ControleAcces from './pages/Securite_liste_menu/ControleAcces';
import Communication from './pages/Communication';
import SystemesDeConference from './pages/Communication_liste_menu/Systemes_de_conference';
import WebRTC from './pages/Communication_liste_menu/WebRTC';
import AffichageDynamique from './pages/Communication_liste_menu/AffichageDynamique';
import Slide from './components/Slide';
//import CardsHome from './components/Home/CardsServices';
import Apropos from './pages/APropos';
import Historique from './pages/Historique/Historique'
import Admin from './pages/Admin_control_panel/AdminPanel'
import { UserContext } from './userContext'
import AddUser from './pages/Admin_control_panel/AddUser';
import AjouterFibreCoefficient from './pages/Admin_control_panel/AjouterFibreCoefficient';
import ListeUtilisateurs from './pages/Admin_control_panel/ListeUtilisateurs';
import ListeUtilisateursId from './pages/Admin_control_panel/ListeUtilisateurId';
import ResetPassword from './components/Log/ResetPassword';
import FactureUser from './pages/Historique/FactureUser';
import ContratUser from './pages/Historique/ContratUser';
import MentionLegals from './pages/Mentions_Legal/MentionLegals';
import Rgpd from './pages/Mentions_Legal/Rgpd';
import ReactGA from 'react-ga';
import Cookies from 'universal-cookie';




function App() {
  const [userData, setUserData] = useState(null)

  const providerValue = useMemo(() => ({userData, setUserData}), [userData, setUserData])

  const [phoneVisible, setPhoneVisible] = useState(false)

  const [headerFixed, setHeaderFixed] = useState(false)

  const cookies = new Cookies();




  const showPhone = () => {
      if(window.innerWidth <= 1024){
          setPhoneVisible(true)
      }
      else if(window.innerWidth > 1024){
          setPhoneVisible(false)
      }
  }

  const showHeader = () => {
    if(window.scrollY > 5){
      setHeaderFixed(true)
    }else{
      setHeaderFixed(false)
    }
  }


  useEffect(() => {
      showPhone();
      showHeader();
      /*setTimeout(() => {
        console.log("attendre 5s")
    }, 5000)*/

    //console.log(cookies.get('integraphone'))

    
    
  }, [])

  window.addEventListener('resize', showPhone)
  window.addEventListener('scroll', showHeader)




  return (
    <div className="App">
    <Router >
    <UserContext.Provider value={providerValue}>
    <div className={headerFixed ? "header_fixed" : ""}>
      <Header/>
    </div>
    <Navigation/>
    <Switch >
      <Route exact path = "/" component = { Home }/>
      <Route exact path = "/connexion" component = { Connexion }/>
      <Route exact path = "/inscription" component = { Inscription }/>
      <Route exact path = "/operateur" component = { Operateur }/>
      <Route exact path = "/operateur/fibre_optique" component= {FibreOptique}/>
      <Route exact path = "/operateur/telephonie_ip" component= {TelephonieIP}/>
      <Route exact path = "/operateur/telephonie_mobile" component= {TelephonieMobile}/>
      <Route exact path = "/infogerance" component = { Infogerance }/>
      <Route exact path = "/infogerance/serveur_et_hebergement" component= {ServeurEtHebergement}/>
      <Route exact path = "/infogerance/saas_et_laas" component= {SaasLaas}/>
      <Route exact path = "/infogerance/cablage_reseaux" component= {CablageReseaux}/>
      <Route exact path = "/infogerance/protection_des_donnees" component= {ProtectionDesDonnees}/>
      <Route exact path = "/securite" component = { Securite }/>
      <Route exact path = "/securite/video_surveillance" component = { VideoSurveillance }/>
      <Route exact path = "/securite/alarme" component = { Alarme }/>
      <Route exact path = "/securite/controle_acces" component = { ControleAcces }/>
      <Route exact path = "/communication" component = { Communication }/>
      <Route exact path = "/communication/systemes_de_conference" component = { SystemesDeConference }/>
      <Route exact path = "/communication/web_rtc" component = { WebRTC }/>
      <Route exact path = "/communication/affichage_dynamique" component = { AffichageDynamique }/>
      <Route exact path = "/posts" component={ Home } />
      <Route exact path = "/posts/:id" component={ Home }/>
      <Route exact path = "/a_propos" component={ Apropos }/>
      <Route exact path = "/formulaire_devis_operateur" component={ FormulaireDevisOperateur }/>
      <Route exact path = "/formulaire_devis_infogerance" component={ FormulaireDevisInfogerance }/>
      <Route exact path = "/formulaire_devis_securite" component={ FormulaireDevisSecurite }/>
      <Route exact path = "/formulaire_devis_communication" component={ FormulaireDevisCommunication }/>
      <Route exact path = "/eligibilite" component={Eligibilite}/>
      <Route exact path = "/formulaire_partenaire" component= {FormulairePartenaire}/>
      <Route exact path = "/formulaire_membre" component= {FormulaireMembre}/>
      <Route exact path = "/formulaire_contact" component= {FormulaireContact}/>
      <Route exact path = "/mot_de_passe_oublie" component= {MotDePasseOublie}/>
      <Route exact path = "/slide" component= {Slide}/>
      <Route exact path = "/documents" component = {Historique}/>
      <Route exact path = "/admin" component = {Admin} />
      <Route exact path = "/ajouter_utilisateur" component = {AddUser}/>
      <Route exact path = "/ajouter_fibre_coefficient" component = {AjouterFibreCoefficient} />
      <Route exact path = "/liste_utilisateur" component = { ListeUtilisateurs }/>
      <Route exact path = "/liste_utilisateur/:id" component = {ListeUtilisateursId}/>
      <Route exact path = "/reset_password/:id/:token" component={ResetPassword}/>
      <Route exact path = "/liste_factures/utilisateur/:id" component={FactureUser}/>
      <Route exact path = "/liste_contrats/utilisateur/:id" component={ContratUser}/>
      <Route exaxt path = "/mention" component={MentionLegals}/>
      <Route exact path = "/rgpd" component={Rgpd}/>
      
    <Redirect to = "/"/>
    </Switch>
    <div className="phone_call_arrow_up">
      {
        phoneVisible && <PhoneCall/>
      }
      <ScrollToTop smooth component={<ArrowUp/>} />
    </div>
      
    { window.innerWidth <= 1024 ?  <FooterResponsive/> : <Footer/> }
    </UserContext.Provider>
    </Router> 
    </div>
  );
}

export default App;
