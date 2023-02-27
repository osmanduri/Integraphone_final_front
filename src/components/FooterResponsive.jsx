import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from "../components/Footer/LogoReseaux"
import FooterContact from '../components/Footer/Contact'
export default function FooterResponsive() {
    return (
        <div style={{marginTop:"60px"}} className="footer_responsive_main">
            <div className="footer_responsive" >
                <div className="footer_responsive_left">
                    <FooterContact/>
                </div>
                <div className="footer_responsive_right">
                    <FooterLogo/>
                </div>
            </div>
            <div className="footer_operateur_infogerance_securite_communication">
                        <div className="footer_responsive_inside">
                            <h2>Opérateur</h2>
                            <div className="footer_responsive_link">     
                                <Link to="/operateur/fibre_optique">Fibre optique</Link>
                                <Link to="/operateur/telephonie_ip">Telephonie IP</Link> 
                                <Link to="/operateur/telephonie_mobile">Telephonie Mobile</Link>
                                
                            </div>         
                        </div>
                        <div className="footer_responsive_inside">
                            <h2>Infogérance</h2>
                            <div className="footer_responsive_link">     
                                <Link to="/infogerance/serveur_et_hebergement">Serveur et hébergement</Link>
                                <Link to="/infogerance/saas_et_laas">Saas et laas</Link>
                                <Link to="/infogerance/cablage_reseaux">Cablage réseaux</Link>
                                <Link to="/infogerance/protection_des_donnees">Protection des données</Link> 
                            </div>         
                        </div>
                        <div className="footer_responsive_inside">
                            <h2>Sécurite</h2>
                            <div className="footer_responsive_link">     
                                <Link to="/securite/video_surveillance">Video surveillance</Link>
                                <Link to="/securite/alarme">Alarme</Link> 
                                <Link to="/securite/controle_acces">Controle d'accès</Link>
                                
                            </div>         
                        </div>
                        <div className="footer_responsive_inside">
                            <h2>Communication</h2>
                            <div className="footer_responsive_link">     
                                <Link to="/communication/systemes_de_conference">Systèmes de conférence</Link>
                                <Link to="/communication/web_rtc">Web rtc</Link>
                                <Link to="/communication/affichage_dynamique">Affichage dynamique</Link> 
                            </div>         
                        </div>
            </div>
            <div className="footer_responsive_mentions_legales">
                <div className="footer_responsive_mentions_legales_left">
                    <Link to="/mention">Mentions légales</Link>
                    <Link to="/mention">Gestion des cookies</Link>
                </div>
                <div className="footer_responsive_mentions_legales_right">
                    <Link to="/rgpd">Charte RGPD</Link>
                    <Link to="/rgpd">Données personnelles et sécurité</Link>
                </div>
            </div>
        
        </div>
    )
}
